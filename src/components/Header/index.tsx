import { Divider } from '@mui/material';
import * as C from './styles';


const Header = () => {
  return (
    <C.Container>
      <C.Logo src="/logo.svg" />
      <C.Title variant="body1">
        <C.RocketIcon />
        {'Star Wars Characters'.toUpperCase()}
      </C.Title>
      <C.Subtitle variant="body2">
        A list of all Star Wars characters
      </C.Subtitle> 

      <Divider />
    </C.Container>
  )
}

export default Header