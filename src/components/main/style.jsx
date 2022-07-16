import styled, {keyframes} from 'styled-components';


const animationPulsar = keyframes`
    0%,100%{
        opacity: 1;
    }
    50%{
        opacity: 0;
    }
`

export const Main = styled.div`
    padding: 100px 20px 50px;
    display: flex;
    justify-content: center;
    background-color: #fff;
    width: 100vw;
    height: calc(100vh - 100px);
    min-height: 100%;
    align-items: center;
`;
export const Title = styled.h2 `
    font-size: 3em;
    color: #047A5A;
    animation: ${animationPulsar} 2s infinite;
`



