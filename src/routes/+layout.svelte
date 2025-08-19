<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
    import { addMessages, getLocaleFromNavigator, init as initI18n, _ } from "svelte-i18n";
    import en from "$lib/assets/locales/en.json";
	addMessages("en", en);
	initI18n({
		fallbackLocale: "en",
		initialLocale: getLocaleFromNavigator(),
	});
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{$_('app_name')}</title>
</svelte:head>

{@render children?.()}
