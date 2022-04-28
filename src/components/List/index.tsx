import { GetServerSideProps } from 'next';
import { ICharacter, IData, IHomeWorld } from '../../interfaces';
import ListItem from '../ListItem';
import * as C from './styles'

interface Props {
  data: IData; 
}

const List: React.FC<Props> = ({ data }) => {

  console.log(data)

  return (
    <C.Container>
      <C.MainList>
        {data?.results?.map((item: ICharacter) => (
          <ListItem key={item.created} item={item} />
        ))}
      </C.MainList>
    </C.Container>
  )
}

export default List