<script>
    import Screenshot2_Dark from "$lib/assets/Screenshot2-Dark.png";
    import Screenshot2_Light from "$lib/assets/Screenshot2-Light.png";
    import ScreenshotWindow from "$lib/components/ScreenshotWindow.svelte";
    import Typewriter from "$lib/components/Typewriter.svelte";
    import I18n from "$lib/i18n.svelte";
    import {_} from "svelte-i18n"
</script>

<!-- Hero -->
<section class="hero py-7">
    <div class="container py-5">
        <div class="row align-items-center gy-6">
            <div
                class="col-lg-5 d-none d-lg-flex justify-content-lg-center justify-content-start"
            >
                <ScreenshotWindow
                    darkScreenshot={Screenshot2_Dark}
                    lightScreenshot={Screenshot2_Light}
                    tilt={-4}
                    hoverTilt={-2.5}
                    hoverOffset={4}
                ></ScreenshotWindow>
            </div>
            <div class="col-lg-7">
                <h2 class="hero-header mb-3">
                    <I18n key="hero2.built-for"/> <Typewriter words={[$_('hero2.bf1'), $_('hero2.bf2'), $_('hero2.bf3'), $_('hero2.bf4'), $_('hero2.bf5')]}/>
                </h2>
                <p class="hero-lead mb-4">
                    <I18n key="hero2.description"/> 
                </p>

            </div>
        </div>
    </div>
</section>

<style>
    .hero {
        background: transparent;
    }

    .py-7 {
        padding-top: 6rem;
        padding-bottom: 6rem;
    }

    .hero-title {
        font-size: clamp(2.2rem, 3.8vw + 1rem, 3.75rem);
        font-weight: 800;
    }

    .hero-lead {
        font-size: 1.125rem;
        color: #495057;
    }

    .btn-xl {
        padding: 1rem 2rem;
        font-size: 1.25rem;
        border-radius: 0.5rem;
    }

    .btn-xxl {
        padding: 1rem 5rem;
        font-size: 1.25rem;
        border-radius: 0.5rem;
    }

    :global([data-bs-theme="dark"]) .hero {
        background: transparent;
    }

    :global([data-bs-theme="dark"]) .hero-lead {
        color: #b8c1d1;
    }
</style>
