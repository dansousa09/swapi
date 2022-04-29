import { useState } from 'react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

import { Backdrop, CircularProgress } from '@mui/material'
import getHomeworld from '../../utils/gethomeworld'

const Character = ({ data }) => {
  const [backdropOpen, setBackdropOpen] = useState(false);
  const router = useRouter();

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
    <div>
      <h1 onClick={redirect} >{data.name}</h1>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropOpen}
        onClick={() => setBackdropOpen(false)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.params;
  const res = await fetch('http://localhost:3000/api/character/' + id);
  const data = await res.json();

  let homeworlds = await getHomeworld(data.homeworld);
  data.homeworld = homeworlds.name;

  return {
    props: {
      data
    }
  }
}


export default Character;