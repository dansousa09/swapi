import { useState } from 'react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

import { Backdrop, CircularProgress, useMediaQuery } from '@mui/material'
import getHomeworld from '../../utils/gethomeworld'

import CardCharacter from '../../components/CardCharacter'
import * as C from '../../styles/pages/Character'
import Header from '../../components/Header'
import getFilms from '../../utils/getFilms'

const Character = ({ data }) => {
  const [backdropOpen, setBackdropOpen] = useState(false);
  const router = useRouter();

  const queryMin800 = useMediaQuery('(min-width:800px)');

  const redirect = () => {
    const windowUrl = window.location.href;
    router.back();

    if (windowUrl.includes('character')) {
      setBackdropOpen(true);
    } else {
      setBackdropOpen(false);
    }
  }



  return (
    <C.Container>
      <Header />
      <CardCharacter data={data} />
      <C.BackButton onClick={redirect} ><C.BackIcon />Back</C.BackButton>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropOpen}
        onClick={() => setBackdropOpen(false)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </C.Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.params;
  const res = await fetch('http://localhost:3000/api/character/' + id);
  const data = await res.json();

  let homeworlds = await getHomeworld(data.homeworld);
  data.homeworld = homeworlds.name;
  let films = await getFilms(data.films);
  data.films = films;

  return {
    props: {
      data
    }
  }
}


export default Character;