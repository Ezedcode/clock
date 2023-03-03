import styled, { keyframes } from "styled-components";

const animation = keyframes`
  from {
    left: 61%;
  }
  to {
    left: 5%;
  }
`;

const animation2 = keyframes`
  from {
    left: 5%;
  }
  to {
    left: 61%;
  }
`;

const Container = styled.div`
   & {    
    position: relative;
    width: 3.5rem;
    height: 1.5rem;
    margin-top: 20px;
    margin-right: 20px;
    background: #183d75;
    border-radius: 20px;
    cursor: pointer;
    border: 2px solid #00e8ffe0;
  }

  & > div {
    position: absolute;
    top: 10%;
    left: 61%;
    width: 1.2rem;
    height: 1.2rem;
    background: #00e8ffe0;
    border-radius: 100%;
  }

  & > div.active {
    left: 5%;
    animation: ${animation} .5s;
  }

  & > div.deactive {
    animation: ${animation2} .5s;
  }
`;

export default Container;