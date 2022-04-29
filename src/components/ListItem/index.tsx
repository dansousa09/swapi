import { useEffect, useState } from 'react';
import { ICharacter } from '../../interfaces';
import { getRandomAvatar } from '../../utils/avataaars';
import * as C from './styles'

interface Props {
  item: ICharacter;
  queryMin800: boolean;
}

const ListItem: React.FC<Props> = ({ item, queryMin800 }) => {

  const [avatarOptions, setAvatarOptions] = useState({})

  useEffect(() => {
    const options = getRandomAvatar();
    setAvatarOptions(options);
  }, [item])

  return (
    <C.Container queryMin800={queryMin800} >
      <C.AvatarItem>
        <C.AvatarImg>
          <C.AvatarIcon
            avatarStyle='Circle'
            {...avatarOptions}
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

