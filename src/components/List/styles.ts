import { List } from "@mui/material";
import styled from "styled-components"; 

export const Container = styled.main`
    background-color: ${(props) => props.theme.colors.background};
    width: 100%;
    height: 100%;
    padding: 0 4rem;

    display: flex; 
    justify-content: center;
    align-items: center;
`;

export const MainList = styled(List)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem; 

    width: 75%;
    height: 100%;
`;