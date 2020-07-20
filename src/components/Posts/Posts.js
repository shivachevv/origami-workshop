import React, { Component } from 'react';
import styles from './posts.module.css'
import Post from '../Post/Post'


class Posts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            origamis: []
        }
    }

    getOrigamis = async () => {
        const promise = await fetch('http://localhost:9999/api/origami/')
        const origamis = await promise.json()
        this.setState({
            origamis
        })
    }

    componentDidMount() {
        this.getOrigamis()
    }

    renderOrigamis() {
        const { origamis } = this.state
        return origamis.map(o => {
            return (
                <Post {...o} key={o._id}></Post>
            )
        })
    }

    render() {
        return (
            <div className={styles.posts}>
                {this.renderOrigamis()}
            </div>
        )
    }
}

export default Posts
