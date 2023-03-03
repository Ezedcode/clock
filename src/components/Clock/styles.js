import styled from "styled-components";


const Container = styled.div`
    height: 10rem;
    width: 30rem;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    & > span {
        width: 50%;
        height: 70%; 
        margin: 0 20px;
        border-radius: 10px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    & div {
        font-size: 40px;
        font-weight: bolder;
    }

    @media (max-width: 500px) {
        width: 70vw;
        height: 70vh; 
        flex-direction: column;

        & > span {
          width: 80%;
          height: 50%;
          margin: 10px 0; 
        }
    }

`;

export default Container;