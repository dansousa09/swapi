import { useMediaQuery } from '@mui/material';
import React, { useEffect } from 'react'
import { ICharacter } from '../../interfaces'
import { getRandomAvatar } from '../../utils/avataaars';
import * as C from './styles'

interface IProps {
  data: ICharacter;
}

const CardCharacter: React.FC<IProps> = ({ data }) => {
  const [avatarOptions, setAvatarOptions] = React.useState({})

  const queryMin900 = useMediaQuery('(min-width: 900px)'); 

  useEffect(() => {
    const options = getRandomAvatar();
    setAvatarOptions(options);
  }, [data])

  return (
    <C.Container queryMin900={queryMin900} >
      <C.AvatarArea queryMin900={queryMin900} >
        <C.AvatarItem>
          <C.AvatarImg>
            <C.AvatarIcon
              avatarStyle='Circle'
              {...avatarOptions}
            />
          </C.AvatarImg>
        </C.AvatarItem>
        <C.Name variant='h1' >{data.name}</C.Name>
      </C.AvatarArea>
      <C.InfoArea queryMin900={queryMin900}>
        <C.DetailsTitle variant='h6'>Character Details</C.DetailsTitle>
        <C.List>
          <C.Keys>
            <C.ListItem>
              <p>Gender:</p>
            </C.ListItem>
            <C.ListItem>
              <p>Hair Color:</p>
            </C.ListItem>
            <C.ListItem>
              <p>Eye Color:</p>
            </C.ListItem>
            <C.ListItem>
              <p>Height</p>
            </C.ListItem>
            <C.ListItem>
              <p>Mass</p>
            </C.ListItem>
            <C.ListItem>
              <p>Skin Color:</p>
            </C.ListItem>
            <C.ListItem>
              <p>Birth Year</p>
            </C.ListItem>
            <C.ListItem>
              <p>HomeWorld</p>
            </C.ListItem>
            <C.ListItem>
              <p>Films</p>
            </C.ListItem>
          </C.Keys>
          <C.Values>
            <C.ListItem>
              <span>{data.gender}</span>
            </C.ListItem>
            <C.ListItem>
              <span>{data.hair_color}</span>
            </C.ListItem>
            <C.ListItem>
              <span>{data.eye_color}</span>
            </C.ListItem>
            <C.ListItem>
              <span>{data.height}</span>
            </C.ListItem>
            <C.ListItem>
              <span>{data.mass}</span>
            </C.ListItem>
            <C.ListItem>
              <span>{data.skin_color}</span>
            </C.ListItem>
            <C.ListItem>
              <span>{data.birth_year}</span>
            </C.ListItem>
            <C.ListItem>
              <span>{data.homeworld}</span>
            </C.ListItem>
            <C.ListItem>
              <span>
                {data.films.map((film, index) => {
                  if (index <= 2) {
                    return (
                      <p>{film}</p>
                    )
                  }
                })}
              </span>
            </C.ListItem>
          </C.Values>
        </C.List>
      </C.InfoArea>

    </C.Container>
  )
}

export default CardCharacter