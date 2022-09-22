import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --map-tiles-filter: brightness(0.6) invert(1) contrast(3) hue-rotate(200deg) saturate(0.3) brightness(0.7);

        @media screen and (max-width: 600px) {
            font-size: 3.2vw;    
        }
    }

    HTML {
        background-color: ${(props) => props.theme.colors.bgPrimary};   
    }
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        transition: color 300ms ease-out;
        transition: background-color 300ms ease-out;
        list-style: none;
        font-style: none;
        text-decoration: none;

    }

    .map-tiles {
        filter: ${(props) =>
          props.theme.title === "dark"
            ? "var(--map-tiles-filter, none)"
            : "none"} ;
}


`;

export { GlobalStyle };
