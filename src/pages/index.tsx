import React from "react";
import Head from "next/head";

import { Container } from "../styles/pages/Home";
import Header from "../components/Header";
import List from "../components/List";
import { GetServerSideProps } from "next";
import { IData, ICharacter, IHomeWorld } from "../interfaces";

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
        </Container>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('http://localhost:3000/api/characters');
    const data: IData = await res.json();

    const getHomeworld = async (url: string): Promise<IHomeWorld> => {
        const planetsIndex = url.indexOf('planets');
        const id = url.slice(planetsIndex + ('planets'.length + 1));
        const response = await fetch(`http://localhost:3000/api/homeworld?id=${id}`);
        const data = await response.json();
        return data;
    };

    for (let i = 0; i < data.results.length; i++) {
        let homeworlds = await getHomeworld(data.results[i].homeworld);
        data.results[i].homeworld = homeworlds.name;
    }

    return {
        props: { data }
    }
}

export default Home;

