<script lang="ts">
  import { t } from "svelte-i18n";

  export let key: string;
  export let params: Record<string, unknown> = {};

  $: raw = $t(key, params);
  $: segments = parseInline(raw);

  type Seg = { type: 0 | 1 | 2; text: string };

  const cache = new Map<string, Seg[]>();

  function parseInline(input: string): Seg[] {
    if (!input) return [{ type: 0, text: "" }];

    if (!/[*_\\]/.test(input)) return [{ type: 0, text: input }];

    const cached = cache.get(input);
    if (cached) return cached;

    const out: Seg[] = [];
    let i = 0;
    let buf = ""; 
    const n = input.length;

    const flush = () => {
      if (buf) {
        out.push({ type: 0, text: buf });
        buf = "";
      }
    };

    // find closing marker starting at pos with same symbol and length (1 or 2)
    function findClose(sym: string, len: 1 | 2, from: number): number {
      // scan linearly; handle escapes
      for (let j = from; j < n; j++) {
        const c = input[j];
        if (c === "\\") { j++; continue; }
        if (c === sym) {
          // count run length
          let k = j + 1;
          if (len === 2 && k < n && input[k] === sym) {
            return j; // found ** or __
          }
          if (len === 1 && !(k < n && input[k] === sym)) {
            return j; // found * or _
          }
        }
      }
      return -1;
    }

    while (i < n) {
      const c = input[i];

      // escapes: \* or \_
      if (c === "\\" && i + 1 < n && (input[i + 1] === "*" || input[i + 1] === "_")) {
        buf += input[i + 1];
        i += 2;
        continue;
      }

      if (c === "*" || c === "_") {
        // measure run length (1 or 2 only)
        const sym = c;
        const isDouble = i + 1 < n && input[i + 1] === sym;
        const len = (isDouble ? 2 : 1) as 1 | 2;

        // attempt to find a matching close
        const closeAt = findClose(sym, len, i + len);
        if (closeAt !== -1) {
          // emit text before opening
          flush();

          // content between open and close
          const content = input.slice(i + len, closeAt);

          // type: 1=bold, 2=italic
          out.push({ type: len === 2 ? 1 : 2, text: unescape(content) });

          i = closeAt + len; // skip closing marker(s)
          continue;
        }
        // no close; treat marker(s) as literal
        buf += sym.repeat(len);
        i += len;
        continue;
      }

      // normal char
      buf += c;
      i++;
    }

    flush();

    cache.set(input, out);
    return out;

    // turn escaped markers back to literals inside formatted regions
    function unescape(s: string): string {
      // Only two escapes to care about
      let r = "";
      for (let p = 0; p < s.length; p++) {
        if (s[p] === "\\" && p + 1 < s.length && (s[p + 1] === "*" || s[p + 1] === "_")) {
          r += s[p + 1];
          p++;
        } else {
          r += s[p];
        }
      }
      return r;
    }
  }
</script>

<span>
  {#each segments as seg}
    {#if seg.type === 0}{seg.text}
    {:else if seg.type === 1}<strong>{seg.text}</strong>
    {:else}<em>{seg.text}</em>
    {/if}
  {/each}
</span>
