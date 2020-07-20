import React from 'react'
import styles from './post.module.css'
import logo from '../../images/blue-origami-bird.png' 

const Post = ( {description, author} ) => {

  return (
    <div className={styles.post}>
      <img className={styles.image} src={logo} />
      <p className={styles.description}>
        {description}
      </p>
      <div>
        <span className={styles.user}>
          <small>Author: </small>
          {author.username}
        </span>
        
      </div>
    </div>
  )
}

export default Post