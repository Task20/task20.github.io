<script>
    import "../global.css";

    import Navbar from "$lib/components/Navbar.svelte";
    import ThemeProvider from "../contexts/providers/ThemeProvider.svelte";
    import Hero1 from "$lib/sections/Hero1.svelte";
    import Features from "$lib/sections/Features.svelte";
    import Hero2 from "$lib/sections/Hero2.svelte";
    import Hero3 from "$lib/sections/Hero3.svelte";
    import I18n from "$lib/i18n.svelte";
</script>

<ThemeProvider>
    <div class="main-content">
        <Navbar></Navbar>
        <Hero1></Hero1>
        <Features></Features>
        <section class="section-muted py-5">
            <Hero2></Hero2>
            <Hero3></Hero3>
        </section>
        <footer class="py-5 text-center text-muted small">
            <div class="container"><I18n key="footer.copyright" /></div>
        </footer>
    </div>
</ThemeProvider>

<style>
    .main-content {
        background: radial-gradient(
                1200px 400px at right -100px,
                rgba(111, 66, 193, 0.15),
                transparent
            ),
            radial-gradient(
                600px 300px at 30% 10%,
                rgba(123, 47, 247, 0.1),
                transparent
            );
    }

    /* Install section */
    .section-muted {
        background: var(--soft-bg);
    }

    :global([data-bs-theme="dark"]) .section-muted {
        background: #121622;
    }

    :global([data-bs-theme="dark"]) .main-content {
        background: radial-gradient(
                1200px 400px at right -100px,
                rgba(123, 47, 247, 0.12),
                transparent
            ),
            radial-gradient(
                600px 300px at 30% 10%,
                rgba(123, 47, 247, 0.08),
                transparent
            );
    }
</style>
