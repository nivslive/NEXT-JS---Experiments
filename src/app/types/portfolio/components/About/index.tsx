import React from 'react'
export const About = (props: any): any => {
    return (
        <div>
            <h1>{ props.data.title }</h1>
            <hr/>
            <p>{ props.data.description }</p>

        </div>
    )
} 