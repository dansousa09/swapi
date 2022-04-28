import React from "react";
import Head from "next/head";

import { Container } from "../styles/pages/Home";
import { GetServerSideProps } from "next";
import { IData } from "../interfaces";
import Header from "../components/Header";
import List from "../components/List";
import Pagination from "../components/Pagination";
import getHomeworld from "../utils/gethomeworld";

interface Props {
    data: IData;
}

const Home: React.FC<Props> = ({ data }) => {
    return (
        <Container>
            <Head>
                <title>Swapi</title>
            </Head>
            <Header />
            <List data={data} /> 
            <Pagination />
        </Container>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('http://localhost:3000/api/characters');
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

