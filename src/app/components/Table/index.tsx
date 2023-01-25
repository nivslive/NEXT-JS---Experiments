import React, { FC } from "react";
import styles from './style.module.scss';
export const Table: FC = () => {
    
    const filtered_table = (data: any) => {
        let allKeys: any = [];
        data.forEach((element: any) => {
            Object.keys(element).forEach((el) => {
            allKeys.push(el)
            })
        })
        allKeys = allKeys.reduce((acc: any, curr: any) => (acc[curr] = '', acc), {});
        return Object.keys(allKeys)
    }
    
    const table = require('../../../../storage/table.json');
    const table_keys = filtered_table(table);
    console.log(table_keys);
    return (
        <div> 
            <table className={styles.table}>
                <thead>
                    <tr>
                        { table_keys.map(keys => <th> {keys}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {table.map((column: any) => {
                        return (
                            <tr>
                                { table_keys.map(keys => <td> {column[keys]}</td>)} 
                            </tr>
                        )
                    } )}
                </tbody>


            </table>
        </div>
    );
}