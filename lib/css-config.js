import css from 'styled-jsx/css'

export const THEMES = css.global`
  /* Dark Mode */
  .dark-theme, .invert-theme {
    --geist-foreground: #fff;
    --geist-background: #000;
    --geist-selection: var(--geist-purple);
    --accents-8: #fafafa;
    --accents-7: #eaeaea;
    --accents-6: #999999;
    --accents-5: #888888;
    --accents-4: #666666;
    --accents-3: #444444;
    --accents-2: #333333;
    --accents-1: #111111;

    /* Success (Blue) */
    --geist-success-light: #3291FF;
    --geist-success: #0070F3;
    --geist-success-dark: #0366D6;

    /* Error (Red) */
    --geist-error-light: #FF3333;
    --geist-error: #FF0000;
    --geist-error-dark: #E60000;

    /* Warning (Orange) */
    --geist-warning-light: #F7B955;
    --geist-warning: #F5A623;
    --geist-warning-dark: #F49B0B;

    /* Secondary (Gray) */
    --geist-secondary-light: var(--accents-3);
    --geist-secondary: var(--accents-5);
    --geist-secondary-dark: var(--accents-7);

    --geist-marketing-gray: var(--accents-1);

    --geist-code: var(--geist-cyan);

    --dropdown-box-shadow: 0 0 0 1px var(--accents-2);
    --dropdown-triangle-stroke: #333;

    --scroller-start: rgba(0, 0, 0, 1);
    --scroller-end: rgba(0, 0, 0, 0);
    --geist-link-color: var(--geist-foreground);

    --shadow-small: 0 0 0 1px var(--accents-2);
    --shadow-medium: 0 0 0 1px var(--accents-2);
    --shadow-large: 0 0 0 1px var(--accents-2);

    --shadow-hover: 0 0 0 1px var(--geist-foreground);

    --portal-opacity: 0.75;
  }

  .dark-theme .geist-card-shadow {
    box-shadow: 0 0 0 1px var(--accents-2);
  }
`

const ThemeVariables = () => (
  <style jsx global>
    {THEMES}
  </style>
)

export const CSSVariables = ({ disableTheme }) => (
  // Cannot conditionally insert a <style jsx> tag, but you
  // can conditioanlly insert a component with one
  <>{!disableTheme && <ThemeVariables />}</>
)
