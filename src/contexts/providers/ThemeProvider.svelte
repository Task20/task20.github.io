<script lang="ts">
  import { setContext } from 'svelte';
  import { THEME_CTX, createThemeController } from '../theme.svelte';
  const themeCtrl = createThemeController();
  setContext(THEME_CTX, themeCtrl);
</script>
<slot />
