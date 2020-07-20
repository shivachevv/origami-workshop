import React from 'react';
import Heading from '../../components/Heading/Heading'
import styles from './share.module.css'

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
                <div>Post 1</div>
                <div>Post 2</div>
                <div>Post 3</div>
            </div>
        </div>
    );
};

export default Share;