import React from 'react'
import styles from './header.module.css';


export default ({ href, title }) => {
    return (
        <li className={styles.listItem}>
            <a href={href}>{title}</a>
        </li>
    )
}