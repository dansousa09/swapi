import React from "react";
import Head from "next/head";

import { Container } from "../styles/pages/Home";
import Header from "../components/Header";
import List from "../components/List";

const Home: React.FC = () => {
    return (
        <Container>
            <Head>
                <title>Swapi</title>
            </Head>
            <Header />
            <List /> 
        </Container>
    );
};

export default Home;
