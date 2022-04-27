import styled from "styled-components"; 
import Logo from '../../assets/vercel.svg';
import { Typography } from "@mui/material";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';



export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 

  width: 100%;
  height: 20%; 

  position: absolute;
  top: 0;
`; 

export const StarWarsLogo = styled(Logo)`
  
`;

export const Title = styled(Typography)` 
  color: ${props => props.theme.colors.secondary}; 
  font-weight: bold; 
  font-size: 24px;
`; 

export const RocketIcon = styled(RocketLaunchIcon)``;

export const Subtitle = styled(Typography)`
  color: ${props => props.theme.colors.tertiary}; 
  opacity: 0.4; 
  font-style: italic;
`; 