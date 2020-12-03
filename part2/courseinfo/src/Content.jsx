import React from 'react';
import Part from './Part';


const Content = ({course}) => {
    console.log("cparts:",course);
    const {parts} = course
    console.log("Course parts:", parts);
    return (
        <div>
            {
                parts.map(part => {
                    return <Part key={part.id} part={ part.name } exercises={ part.exercises }/>
                })
            }
        </div>
    )
}

export default Content
