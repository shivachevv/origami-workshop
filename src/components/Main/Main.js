import React from 'react';
import styles from './main.module.css';
import Posts from '../Posts/Posts'

const Main = (props) => {
    return (
        <main className={styles.main}>
            <h1>Some Heading</h1>
            <Posts></Posts>
        </main>
    );
}

export default Main;