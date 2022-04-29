import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 0 4rem;

    background-color: ${props => props.theme.colors.background};
`;

export const BackButton = styled.button`
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 0.4rem; 

    outline: none;
    border: none;

    background-color: ${props => props.theme.colors.tertiary};

    position: fixed;
    top: 1rem;
    left: 2rem;

    &:hover {
        opacity: 0.8;

    }
`;

export const BackIcon = styled(ArrowBackIcon)`
    width: 1rem;
    height: 1rem;

    
`;
