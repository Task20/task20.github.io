<script lang="ts">
  const {
    words = [],
    typingSpeed = 90, 
    deletingSpeed = 80, 
    pauseBetween = 2000, 
    pauseAfter = 100,
    loop = true
  } = $props<{
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseBetween?: number;
    pauseAfter?: number;
    loop?: boolean;
  }>();

  let text = $state('');
  let index = $state(0);
  let token = 0;

  const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

  async function cycle(myToken: number) {
    if (!words.length) return;

    // run forever if loop, otherwise once through the list
    const maxCycles = loop ? Number.POSITIVE_INFINITY : words.length;
    let cycles = 0;

    while (cycles < maxCycles) {
      const word = words[index];

      // type
      for (let i = 1; i <= word.length; i++) {
        if (myToken !== token) return;
        text = word.slice(0, i);
        await sleep(typingSpeed);
      }

      await sleep(pauseBetween);

      // delete
      for (let i = word.length - 1; i >= 0; i--) {
        if (myToken !== token) return;
        text = word.slice(0, i);
        await sleep(deletingSpeed);
      }

      await sleep(pauseAfter);

      index = (index + 1) % words.length;
      
      cycles++;
    }
  }


  $effect.root(() => {
    token++;  
    text = '';
    
    index = 0;

    if (typeof window !== 'undefined') {
      cycle(token);
      return () => { token++; }; 
    }
  });
</script>

<span class="typewriter" aria-live="polite" role="status">
  {text}<span class="cursor" aria-hidden="true"></span>
</span>

<style>
  .typewriter {
    color: var(--bs-primary);
    white-space: pre;
  }

  .cursor {
    display: inline-block;
    width: 0.08em;
    height: 1em;
    margin-left: 0.06em;
    vertical-align: -0.1em;
    background: currentColor; 
    animation: blink 1s steps(1, end) infinite;
  }

  @keyframes blink {
    50% { opacity: 0; }
  }

  @media (prefers-reduced-motion: reduce) {
    .cursor { animation: none; }
  }
</style>
