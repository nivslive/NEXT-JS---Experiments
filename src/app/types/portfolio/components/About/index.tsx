import React from 'react'
import styles from './style.module.scss'
export const About = (props: any): any => {
    return (
        <div className={styles.about}>
            <h1>{ props.data.title }</h1>
            <hr/>
            <p>{ props.data.description }</p>

        </div>
    )
} 