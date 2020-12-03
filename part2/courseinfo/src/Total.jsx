import React from 'react';

const Total = ({course}) => {
    const {parts} = course
    let sum = 0;
    const total = parts.reduce((acc, cur) => acc + cur.exercises, sum)
    console.log(total);
    return (
        
        <div>
            <p> Total {total} of exercises</p>
        </div>
    )
}

export default Total
