import React from 'react';
import Part from './Part';


const Content = () => {
    const part1 = "Fundamentals of React";
    const exercise1 = 10;
    const part2 = "usinig props to pass data"
    const exercise2 = 7;
    const part3 = "state of component"
    const exercise3 = 14
    return (
        <div>
            <Part part={ part1 } exercise={exercise1} />
            <Part part={ part2 } exercise={exercise2} />
            <Part part={ part3 } exercise={exercise3} />
        </div>
    )
}

export default Content
