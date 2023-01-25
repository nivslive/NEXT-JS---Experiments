import React, { FC } from "react";
import styles from './style.module.scss';

export const Table: FC = (props: any): any => {
    //const table = require('../../../../storage/table.json');
    const table = props.data.data;
    console.log(props.data.title)
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
    
    const table_keys = filtered_table(table);

    return (
        <div className={styles.tableContainer}> 
            <h1> { props.data.title }</h1>
            <table className={styles.table}>
                <thead className="p-3">
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