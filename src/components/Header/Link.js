import React from 'react'
import styles from './header.module.css';
import { Link } from 'react-router-dom' 

export default ({ href, title }) => {
    return (
        <li className={styles.listItem}>
            <Link to={href}>{title}</Link>
        </li>
    )
}