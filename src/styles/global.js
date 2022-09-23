import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  a {
    color: inherit;
  }

  html {
    -webkit-font-smoothing: antialiased;

      @media (max-width: 1080px) {
        font-size: 93.75%;
      }

      @media (max-width: 720px) {
        font-size: 87.5%;
      }
    }

  :root {
    // Color
    --gray-300: #d5d5d5;
    --gray-500: #9099a2;
    --gray-700: #373737;
    --gray-900: #1e1e1e;
    --slate-300: #717A8F;
    --slate-500: #576176;
    --slate-700: #4C5567;
    --pink-300: #EAE7E9;
    --pink-500: #96858f;
    --pink-700: #695D64;
    --white: #fff;

    // Font
    --montserrat: 'Montserrat', sans-serif;
    --poppins: 'Poppins', sans-serif;
    --roboto: 'Roboto', sans-serif;
    --sourceSerifPro: 'Source Serif Pro', serif;

    // Border
    --b-base: 0.25rem;

    // Spacing
    --xs: 0.5rem;
    --sm: 0.75rem;
    --base: 1rem;
    --lg: 1.5rem;
    --xl: 2rem;

    // Max-Width
    --max-w-sm: 448px;
    --max-w-base: 1152px;
  }
`;