import { Typography } from '@mui/material';
import React from 'react'
import { ICharacter } from '../../interfaces'
import * as C from './styles'

interface IProps {
  data: ICharacter;
}

const CardCharacter: React.FC<IProps> = ({ data }) => {
  console.log(data);
  return (
    <C.Container>
      <C.AvatarArea>
        <C.AvatarItem>
          <C.AvatarImg>
            <C.AvatarIcon
              avatarStyle='Circle'
              hairColor={data.hair_color}
            />
          </C.AvatarImg>
        </C.AvatarItem>
        <C.Name variant='h1' >{data.name}</C.Name>
      </C.AvatarArea>
      <C.InfoArea>
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
              <span>{data.films.map((film) => (
                <p>{film}</p>
              ))}</span>
            </C.ListItem>
          </C.Values>
        </C.List>
      </C.InfoArea>

    </C.Container>
  )
}

export default CardCharacter