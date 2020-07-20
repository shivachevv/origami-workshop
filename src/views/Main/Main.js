import React from 'react';
import styles from './main.module.css';
import Posts from '../../components/Posts/Posts'
import Heading from '../../components/Heading/Heading'

const Main = (props) => {
    return (
        <main className={styles.main}>
            <Heading>Publications</Heading>
            <Posts></Posts>
        </main>
    );
}

export default Main;