import styled from "styled-components";
import {
    Avatar,
    List as MuiList,
    ListItem as MuiListItem,
    ListItemAvatar,
    Typography
} from "@mui/material";
import Avataaar from "avataaars";

export const Container = styled.main`
    background-color: ${(props) => props.theme.colors.background};
    width: 100%;
    height: 90%;
    padding: 0 4rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const AvatarArea = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 1rem;
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

export const Name = styled(Typography)`
    font-weight: bold;
    font-size: 2rem;
    color: ${(props) => props.theme.colors.secondary};
`;

export const InfoArea = styled.div`
    width: 40%;
    border: solid 1px ${(props) => props.theme.colors.tertiary};
    border-radius: 4px;
    padding: 1rem;

    -webkit-box-shadow: 5px 5px 6px -3px #000000;
    box-shadow: 5px 5px 6px -3px #000000;
`;

export const DetailsTitle = styled(Typography)`
    font-weight: bold;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.tertiary};
`;

export const List = styled(MuiList)`
    width: 100%;
    height: 100%;
    display: flex;
`;

export const Keys = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    width: 40%;
`;

export const ListItem = styled(MuiListItem)`
    color: ${(props) => props.theme.colors.tertiary};
    display: flex;
    gap: 4rem;

    opacity: 0.8;
    span {
        font-weight: bold;
        opacity: 1;
    }
`;

export const Values = styled.div``;
