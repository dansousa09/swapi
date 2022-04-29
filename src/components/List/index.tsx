
import { useRouter } from 'next/router';
import { ICharacter, IData } from '../../interfaces';
import ListItem from '../ListItem';
import * as C from './styles'

interface Props {
  data: IData;
  queryMin800: boolean;
}

const List: React.FC<Props> = ({ data, queryMin800 }) => {

  const router = useRouter();

  const redirect = (url: string) => {
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