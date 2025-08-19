<script>
    import I18n from "$lib/i18n.svelte";
</script>
<section class="py-5">
    <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4 py-4">
            <div class="col text-start">
                <div
                    class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
                >
                    <i class="bi bi-briefcase" aria-hidden="true"></i>
                </div>
                <h3 class="fs-5 fw-semibold mb-1"><I18n key="features.feature1.title"/></h3>
                <p class="text-secondary mb-0">
                    <I18n key="features.feature1.description"/>
                </p>
            </div>

            <div class="col text-start">
                <div
                    class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
                >
                    <i class="bi bi-tag" aria-hidden="true"></i>
                </div>
                <h3 class="fs-5 fw-semibold mb-1"><I18n key="features.feature2.title"/></h3>
                <p class="text-secondary mb-0">
                    <I18n key="features.feature2.description"/>
                </p>
            </div>

            <div class="col text-start">
                <div
                    class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
                >
                    <i class="bi bi-wifi-off" aria-hidden="true"></i>
                </div>
                <h3 class="fs-5 fw-semibold mb-1"><I18n key="features.feature3.title"/></h3>
                <p class="text-secondary mb-0">
                    <I18n key="features.feature3.description"/>
                </p>
            </div>
        </div>
    </div>
</section>

<style>
    .feature-icon {
        width: 3rem;
        height: 3rem;
        border-radius: 0.75rem;
    }
</style>
