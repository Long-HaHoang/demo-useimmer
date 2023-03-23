import { createGlobalStyle, css } from "styled-components";

// Gets formatted by Prettier
const prettierStyles = css`
  :root {
    --max-width: 1100px;
    --border-radius: 12px;
    --font-mono: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono",
      "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro",
      "Fira Mono", "Droid Sans Mono", "Courier New", monospace;

    --foreground-rgb: 10, 10, 10;
    --background-rgb: 242, 242, 242;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --foreground-rgb: 242, 242, 242;
      --background-rgb: 10, 10, 10;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    color: rgb(var(--foreground-rgb));
    background: rgb(var(--background-rgb));
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }
`;

export default createGlobalStyle`
  ${prettierStyles};
`;
