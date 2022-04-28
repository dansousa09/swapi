import { ICharacter } from '../../interfaces';
import * as C from './styles'

interface Props {
  item: ICharacter;
}

const ListItem: React.FC<Props> = ({ item }) => {

  return (
    <C.Container>
      <C.AvatarItem>
        <C.AvatarImg>
          <C.AvatarIcon
            avatarStyle='Circle'
            hairColor={item.hair_color}
          />
        </C.AvatarImg>
      </C.AvatarItem>

      <C.Divider />

      <C.Texts>
        <C.Name variant="h6" >{item.name}</C.Name>
        <C.Homeworld variant="subtitle1" >Homeworld: {item.homeworld}</C.Homeworld>
      </C.Texts>
    </C.Container>
  )
}



export default ListItem;

