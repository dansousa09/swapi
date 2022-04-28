import { useState } from 'react';
import { useRouter } from 'next/router';
import { Backdrop, CircularProgress } from '@mui/material';
import { ICharacter, IData } from '../../interfaces';
import ListItem from '../ListItem';
import * as C from './styles'

interface Props {
  data: IData;
}

const List: React.FC<Props> = ({ data }) => {
  const [backdropOpen, setBackdropOpen] = useState(false);
  const router = useRouter();

  const redirect = (id: number) => {
    const windowUrl = window.location.href;
    router.push('/character/' + String(id + 1)); 

    if (windowUrl === 'http://localhost:3000/' ) {
      setBackdropOpen(true);
    } else {
      setBackdropOpen(false);
    }
  }

  return (
    <C.Container>
      <C.MainList>
        {data?.results?.map((item: ICharacter, index) => (
          <a key={item.created + index} onClick={() => redirect(index)}>
            <ListItem item={item} />
          </a>
        ))}
      </C.MainList>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropOpen}
        onClick={() => setBackdropOpen(false)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </C.Container >
  )
}

export default List