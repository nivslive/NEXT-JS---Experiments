import React from 'react'
import styles from './style.module.scss'
export const Progress = (props: any): any => {
    
    const rows = [];
    for (let i = 0; i < props.number; i++) {
    rows.push(            
        <div className={styles.box}>
        </div>
        );
    }
    return (
        <div className={styles.progressBox}>
            <div className={styles.box}>
                {rows}
            </div>
        </div>
    )
} 