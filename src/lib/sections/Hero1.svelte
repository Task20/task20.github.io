<script>
    import Screenshot1_Dark from "$lib/assets/Screenshot1-Dark.png";
    import Screenshot1_Light from "$lib/assets/Screenshot1-Light.png";
    import Pill from "$lib/components/Pill.svelte";
    import ScreenshotWindow from "$lib/components/ScreenshotWindow.svelte";
    import I18n from "$lib/i18n.svelte";
    import {_} from 'svelte-i18n'
</script>

<section class="hero py-7">
    <div class="container py-5">
        <div class="row align-items-center gy-5">
            <div class="col-lg-7">
                <h1 class="hero-title mb-3">
                    <I18n key='hero1.title'/>
                </h1>
                <p class="hero-lead mb-4">
                    <I18n key="hero1.description"/>
    
                </p>
                <div class="d-flex align-items-center gap-3">
                    <a class="btn btn-primary btn-xxl" href="#"
                        ><i class="bi bi-download me-2"></i><I18n key='hero1.download'/></a
                    >
                    <a class="btn btn-outline-secondary btn-xl" href="#"
                        ><I18n key='hero1.learn-more'/></a
                    >
                </div>
                <div class="mt-4 text-muted small">
                    <I18n key='hero1.currently'/> <Pill><I18n key='hero1.version'/></Pill> ·
                    <a href="#" class="link-secondary"><I18n key='hero1.all-releases'/></a>
                </div>
            </div>

            <div
                class="col-lg-5 d-none d-lg-flex justify-content-lg-center justify-content-start"
            >
                <ScreenshotWindow
                    darkScreenshot={Screenshot1_Dark}
                    lightScreenshot={Screenshot1_Light}
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
