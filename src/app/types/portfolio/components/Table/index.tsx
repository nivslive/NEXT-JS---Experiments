import { Progress } from "@/app/components/Mini/Progress";
import React, { FC } from "react";
import styles from './style.module.scss';
export const Table: FC = (props: any): any => {
    //const table = require('../../../../storage/table.json');
    const component_number = (data: string) => {
        ( 
           data === "1" ||
           data === "2" ||
           data === "3" ||
           data === "4" ||
           data === "5" ||
           data === "6" ||
           data === "7" ||
           data === "8" ||
           data === "9"
        ) 
          ? <td>  <Progress number={data} /> </td>  
          : <td> {data} </td>;
    }

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
                        { table_keys.map((keys, k) => <th key={k}> {keys}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {table.map((column: any, key: any) => {
                        return (
                            <tr key={key}>
                                { table_keys.map((keys, k) => <td key={k}> {column[keys]}</td>)} 
                            </tr>           
                                )
                            }            
                        )
                    }  
                </tbody>
          
            </table>
        </div>
    );
}