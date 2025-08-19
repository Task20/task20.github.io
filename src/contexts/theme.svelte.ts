
export type Theme = 'light' | 'dark';
export const THEME_CTX = Symbol('theme');

export type ThemeCtrl = {
  readonly theme: Theme;
  setTheme(t: Theme): void;
  toggleTheme(): void;
};
const LS_KEY = 'color-mode';

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  const saved = window.localStorage.getItem(LS_KEY) as Theme | null;
  if (saved === 'light' || saved === 'dark') return saved;

  const prefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

function applyThemeToDom(t: Theme, animate: boolean = false) {
  const html = document.documentElement;
  const run = () => {
    if (typeof document === 'undefined') return;
    html.setAttribute('data-bs-theme', t); 
    html.style.colorScheme = t;
  }
  animate ? withTransition(html, run) : run();
}

export function createThemeController(): ThemeCtrl {
  // App state
  let theme = $state<Theme>(getInitialTheme());
  let isInitialValue = true;

  // Apply on init and whenever theme changes
  $effect(() => {
    applyThemeToDom(theme, !isInitialValue);
    if(isInitialValue) {
      isInitialValue = false;
    }
  });

  function setTheme(t: Theme, animate : boolean = false) {
    if (t !== 'light' && t !== 'dark') return;
    theme = t;
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(LS_KEY, t);
    }
  }

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return {
    get theme() {
      return theme;
    },
    setTheme,
    toggleTheme,
  };
}


function withTransition(html: HTMLElement, fn: () => void) {
  html.classList.add('theme-transition');
  try { fn(); } finally { setTimeout(() => html.classList.remove('theme-transition'), 300); }
}