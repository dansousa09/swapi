import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IData } from '../../interfaces';
import * as C from './styles'

interface Props {
  data: IData;
  setBackdropOpen: (value: boolean) => void;
}

const Pagination: React.FC<Props> = ({ data, setBackdropOpen }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    setCurrentPage(Number(data.next.split("page=")[1]) - 1);
  }, [])

  const pagesCount = Math.ceil(data.count / 10);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setBackdropOpen(true)
    setCurrentPage(value);
    router.push(`/page/${value}`);
  };

  return (
    <C.Container>
      <C.Pagination
        count={pagesCount} variant="outlined" shape="rounded" color='primary' page={currentPage}
        onChange={handleChange}
      />
      <C.CurrentPage variant='subtitle2' >Current Page: {currentPage}</C.CurrentPage>
    </C.Container>
  )
}

export default Pagination