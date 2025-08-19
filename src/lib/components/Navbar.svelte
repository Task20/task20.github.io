<script lang="ts">
    import icon from "$lib/assets/icon.png";
    import {_} from 'svelte-i18n'
    import {t} from 'svelte-i18n'
    import { getContext } from "svelte";
    import { THEME_CTX } from "../../contexts/theme.svelte";
    import type {ThemeCtrl} from "../../contexts/theme.svelte"
    import I18n from "$lib/i18n.svelte";


    const theme : ThemeCtrl = getContext(THEME_CTX);

    const isDark = $derived(theme.theme == 'light')

    function toggleTheme() {
        theme.toggleTheme();
    }
</script>

<nav class="navbar navbar-expand-lg py-4">
    <div class="container">
        <a class="navbar-brand d-flex align-items-center gap-2" href="#">
            <img src={icon} style="height: 40px; width: auto;" alt="logo" />
            <span class="fw-semibold"><I18n key='app_name'/></span>
        </a>

        <button
            class="navbar-toggler text-body border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
        >
            <i class="bi bi-list" style="font-size:1.5rem;"></i>
        </button>

        <div class="collapse navbar-collapse" id="nav">
            <ul class="navbar-nav me-auto ms-2">
                <li class="nav-item">
                    <a class="nav-link active" href="#">{@html $t('navbar.home')}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><I18n key='navbar.installing'/></a>
                </li>
                <li class="nav-item"><a class="nav-link" href="#"><I18n key='navbar.legal'/></a></li>
                <li class="nav-item"><a class="nav-link" href="#"><I18n key='navbar.faq'/></a></li>
            </ul>

            <div class="d-flex align-items-center gap-3">
                <button
                    id="themeToggle"
                    class={"btn d-flex align-items-center gap-2" + (isDark? "btn-outline-light" : "btn-outline-dark") }
                    aria-pressed={isDark}
                    type="button"
                    onclick={toggleTheme}
                    aria-label="Toggle theme"
                    title="Toggle theme"
                >
                    <i class={"bi " + (isDark? "bi-moon" : "bi-sun")}></i>
                   
                </button>
                <a class="btn btn-primary" href="#"><I18n key='navbar.download'/></a>
            </div>
        </div>
    </div>
</nav>

<style>
    /* Top bar */
    .navbar {
        background: transparent;
    }

    .navbar-blur {
        backdrop-filter: none;
        background: transparent !important;
    }

    .navbar .nav-link,
    .navbar .navbar-brand {
        color: var(--bs-body-color) !important;
    }

    .navbar .nav-link:hover {
        color: var(--bs-link-hover-color) !important;
    }

    .navbar .nav-link {
        font-size: 1.05rem;
    }

    .navbar .navbar-brand {
        font-size: 1.125rem;
    }

    .navbar .navbar-brand img {
        height: 40px;
    }

    .navbar .btn {
        padding: 0.6rem 1rem;
        font-size: 0.95rem;
        border-radius: 0.6rem;
    }

    .navbar .navbar-toggler i {
        font-size: 1.75rem;
    }

    [data-bs-theme="dark"] .navbar-blur {
        background: linear-gradient(
            90deg,
            #3b2a6b 0%,
            #4c2ea6 60%,
            #5a35be 100%
        );
    }
</style>
