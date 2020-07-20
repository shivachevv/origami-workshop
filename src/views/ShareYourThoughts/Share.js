import React from 'react';
import Heading from '../../components/Heading/Heading'
import styles from './share.module.css'
import Posts from '../../components/Posts/Posts';

const Share = () => {
    return (
        <div className={styles.input}>
            <div>
                <Heading>Share your thoughts</Heading>
                <textarea></textarea>
                <button>Post</button>
            </div>
            <div>
                <h2>Last 3 posts on your wall</h2>
                <Posts length="3"></Posts>
            </div>
        </div>
    );
};

export default Share;