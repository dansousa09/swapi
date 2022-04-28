import Head from "next/head";
import { useEffect, useState } from "react";

import { Container } from "../../styles/pages/Home";
import { GetServerSideProps } from "next";
import { IData } from "../../interfaces";
import Header from "../../components/Header";
import List from "../../components/List";
import Pagination from "../../components/Pagination";
import getHomeworld from "../../utils/gethomeworld";
import { Backdrop, CircularProgress } from '@mui/material';


interface Props {
    data: IData;
}

const Home: React.FC<Props> = ({ data }) => {
    console.log(data);
    const [backdropOpen, setBackdropOpen] = useState(false);

    useEffect(() => {
        setBackdropOpen(false);
    }, [data]);


    return (
        <Container>
            <Head>
                <title>Swapi</title>
            </Head>
            <Header />
            <List data={data} />
            <Pagination data={data} setBackdropOpen={setBackdropOpen} />
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={backdropOpen}
                onClick={() => setBackdropOpen(false)}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </Container>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { page } = ctx.query;

    const res = await fetch(page ?
        `http://localhost:3000/api/characters/?page=${page}` : 'http://localhost:3000/api/characters/');
    const data: IData = await res.json();

    for (let i = 0; i < data.results.length; i++) {
        let homeworlds = await getHomeworld(data.results[i].homeworld);
        data.results[i].homeworld = homeworlds.name;
    }

    return {
        props: { data }
    }
}

export default Home;

