import { List } from "@mui/material";
import styled from "styled-components";

interface IMainListProps {
    queryMin800: boolean;
}

export const Container = styled.main`
    background-color: ${(props) => props.theme.colors.background};
    width: 100%;
    height: 55%;
    padding: 0 4rem;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MainList = styled(List)<IMainListProps>`
    ${(props) =>
        props.queryMin800
                ? ` display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: repeat(5, 1fr);
                grid-column-gap: 1rem;
                grid-row-gap: 1rem; `
            
                : ` display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                gap: 1rem; 
                width: 100%; 
                `}

    padding: 0 1rem;

    width: 75%;
    height: 100%;

    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 1rem;
        margin-left: 4px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.colors.secondary};
        border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
        background-color: ${(props) => props.theme.colors.background};
    }
`;
