
import { useRouter } from 'next/router';
import { ICharacter, IData } from '../../interfaces';
import ListItem from '../ListItem';
import * as C from './styles'

interface Props {
  data: IData;
}

const List: React.FC<Props> = ({ data }) => {

  const router = useRouter();

  const redirect = (id: number) => {
    const windowUrl = window.location.href;
    router.push('/character/' + String(id + 1));


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

    </C.Container >
  )
}

export default List