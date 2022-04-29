import { Stack, Typography } from "@mui/material";
import { Pagination as Pages } from '@mui/material';
import styled from "styled-components"; 

export const Container = styled(Stack)`
    background-color: ${(props) => props.theme.colors.background};
    width: 100%;
    flex: 1;
    padding: 0 4rem;

    display: flex; 
    justify-content: flex-end;
    align-items: center;
`;

export const Pagination = styled(Pages)`
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.tertiary};

  padding: 4px 0.5rem;
  border-radius: 0.5rem; 
  width: 75%; 

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CurrentPage = styled(Typography)`
  margin: 0.5rem 0;
  color: ${(props) => props.theme.colors.tertiary};
`;