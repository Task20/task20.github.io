<script>
    import Screenshot3_Dark from "$lib/assets/Screenshot3-Dark.png";
    import Screenshot3_Light from "$lib/assets/Screenshot3-Light.png";
    import ScreenshotWindow from "$lib/components/ScreenshotWindow.svelte";
    import I18n from "$lib/i18n.svelte";
</script>

<section class="hero py-7">
    <div class="container py-5">
        <div class="row align-items-center gy-5">
            <div class="col-lg-7">
                <h2 class="hero-header mb-3">
                    <I18n key="hero3.title" />
                </h2>
                <p class="hero-lead mb-4">
                    <I18n key="hero3.description" />
                </p>
            </div>

            <div
                class="col-lg-5 d-none d-lg-flex justify-content-lg-center justify-content-start"
            >
                <ScreenshotWindow
                    darkScreenshot={Screenshot3_Dark}
                    lightScreenshot={Screenshot3_Light}
                    tilt={4}
                ></ScreenshotWindow>
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
