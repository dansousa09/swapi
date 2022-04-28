import styled from "styled-components";
import { ListItem, ListItemAvatar, Avatar, Typography } from "@mui/material";
import Avataaar from "avataaars";

export const Container = styled(ListItem)`
    background-color: ${(props) => props.theme.colors.tertiary};
    width: 100%;
    height: 100%;

    border-radius: 8px;

    display: flex; 
    justify-content: flex-start;
    align-items: center;
`;

export const AvatarItem = styled(ListItemAvatar)`
    width: 30%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center; 
`;

export const AvatarImg = styled(Avatar)`
    width: 90%;
    height: 90%;
`;

export const AvatarIcon = styled(Avataaar)`
    width: 110%;
    height: 110%;
`;

export const Texts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    height: 100%;
`;

export const Name = styled(Typography)`
    font-size: 1rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.text};
`;

export const Homeworld = styled(Typography)`
    font-size: 0.8rem; 
    opacity: 0.7;
    color: ${(props) => props.theme.colors.text};
`;

export const Divider = styled.hr`
    height: 75%;
    width: 2px; 
    margin: 0 0.5rem; 
    color: ${(props) => props.theme.colors.text};

`;