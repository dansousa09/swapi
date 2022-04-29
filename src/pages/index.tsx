import { useEffect, useState } from "react";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";
import Typist from "react-typist";

import catchPhrases from "../utils/catchPhrases";

const Container = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 

    color: #fff;
`;

const Loading = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    margin: 1rem 0;
`;

const Paragraph = styled.p`
    opacity: 0.6;
    font-size: 0.8rem;
    font-style: italic;
`;

const Redirect = () => {

    useEffect(() => {
        window.location.href = window.location.href + "/page/1";
    }, []);

    return (
        <Container>
            <CircularProgress size={65} color="warning" />
            <Loading>Carregando...</Loading>
            <Typist>
                <Paragraph>{catchPhrases[Math.floor(Math.random() * catchPhrases.length)]}</Paragraph>
            </Typist>
        </Container>
    )
};

export default Redirect;

