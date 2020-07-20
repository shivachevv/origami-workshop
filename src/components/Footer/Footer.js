import React from 'react';
import Link from '../Header/Link'
import styles from './footer.module.css'

const Footer = (props) => {

    return (
        <footer className={styles.footer}>
            <ul>
                <Link href="#" title="Going to 1"></Link>
                <Link href="#" title="Going to 2"></Link>
                <Link href="#" title="Going to 3"></Link>
                <Link href="#" title="Going to 4"></Link>
                <Link href="#" title="Going to 5"></Link>
                <Link href="#" title="Going to 6"></Link>
            </ul>
            <p>SoftUni @2020</p>
        </footer>
    );
}

export default Footer;