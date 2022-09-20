import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        @media screen and (max-width: 600px) {
            font-size: 3vw;    
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

    .MuiAutocomplete-root {
        border: none;
        outline: none;
    };

    .MuiTextField-root {
        color: red;
    }
`;

export { GlobalStyle };
