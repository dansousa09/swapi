
import { useRouter } from 'next/router';
import { ICharacter, IData } from '../../interfaces';
import ListItem from '../ListItem';
import * as C from './styles'

interface Props {
  data: IData;
  queryMin800: boolean;
  setBackdropOpen: (open: boolean) => void;
}

const List: React.FC<Props> = ({ data, queryMin800, setBackdropOpen }) => {

  const router = useRouter();

  const redirect = (url: string) => { 
    setBackdropOpen(true);
    const id = url.split('people/')[1];
    router.push(`/character/${id}`);

  }

  return (
    <C.Container>
      <C.MainList queryMin800={queryMin800} >
        {data?.results?.map((item: ICharacter, index) => (
          <a key={item.created + index} onClick={() => redirect(item.url)} >
            <ListItem item={item} queryMin800={queryMin800} />
          </a>
        ))}
      </C.MainList>

    </C.Container >
  )
}

export default List