import * as C from './styles';

const Header = () => {
  return (
    <C.Container>
      <C.StarWarsLogo />
      <C.Title variant="body1">
        <C.RocketIcon />
        {'Star Wars Characters'.toUpperCase()}
      </C.Title>
      <C.Subtitle variant="body2">
        A list of all Star Wars characters
      </C.Subtitle>
    </C.Container>
  )
}

export default Header