import { useEffect } from "react";
import styled from "styled-components";
import Typist from "react-typist";

import catchPhrases from "../utils/catchPhrases";
import router from "next/router";

const Container = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 

    color: #fff;
`;

const Logo = styled.img`
    width: 12rem;
    height: auto;

    
    animation-name: pulse;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    
    
    @keyframes pulse {
        0% {
            transform: scale3d(1, 1, 1);
        }
        50% {
            transform: scale3d(1.05, 1.05, 1.05);
        }
        100% {
            transform: scale3d(1, 1, 1);
        }
    } 
`;

const Texts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Loading = styled.p`
    font-size: 0.55rem;
    font-weight: bold;
    margin: 1rem 0;
    font-family: 'consolas';

`;

const Paragraph = styled.p`
    opacity: 0.6;
    font-size: 0.8rem;
    font-family: 'consolas';
`;

const Redirect = () => {

    useEffect(() => {
        router.push("/page/1");
    }, []);

    return (
        <Container>
            <Logo src="/logo.svg" />
            <Typist>
                <Texts>
                    <Paragraph>{catchPhrases[Math.floor(Math.random() * catchPhrases.length)]}</Paragraph>
                    <Loading>Carregando Dados...</Loading>
                </Texts>
            </Typist>
        </Container >
    )
};

export default Redirect;

