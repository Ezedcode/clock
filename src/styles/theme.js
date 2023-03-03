import { createGlobalStyle, keyframes } from "styled-components";
import themes from '../theme/theme.json';

const theme = themes.ThemeOne;
const theme2 = themes.ThemeTwo;

const animation = keyframes`
    from{
        opacity: 0;
    }

    to{
        opacity: 1;
    }
`;

const animation2 = keyframes`
    from{
        opacity: 0;
    }

    to{
        opacity: 2;
    }
`;

export const Theme1 = createGlobalStyle`
    body {
        color: white;
        animation: ${animation} 1s;
        background: linear-gradient(to right, ${theme.body1}, ${theme.body2});
    }

    .Header > div {
        border: 2px solid ${theme.border};
        background: ${theme.time};
    }

    .Header > div > div {
        background: ${theme.border};
    }
    
    .Container {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .Container > div {
        background: ${theme.bodyTime};
        border: 2px solid ${theme.border};
        box-shadow: 1px 6px 6px ${theme.bodyTimeShadow};
    }

    span {
        background: ${theme.time};
        border: 2px solid ${theme.border};
    }   
`;

export const Theme2 = createGlobalStyle`
    body {
        color: white;
        animation: ${animation2} 1s;
        background: linear-gradient(to right, ${theme2.body1}, ${theme2.body2});
    }

    .Header {
        right: 0;
        position: absolute;
    } 

    
    .Header > div {
        border: 2px solid ${theme2.border};
        background: ${theme2.time};
    }

    .Header > div > div {
        background: ${theme2.border};
    }
    
    .Container {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .Container > div {
        background: ${theme2.bodyTime};
        border: 2px solid ${theme2.border};
        box-shadow: 1px 6px 6px ${theme2.bodyTimeShadow};
    }

    span {
        background: ${theme2.time};
        border: 2px solid ${theme2.border};
    }   
`;