import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    * {
        boreder: 0;
        padding: 0;
        margin: 0;
    }

    .Header {
        right: 0;
        position: absolute;
    } 

    .Container {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export default Global;