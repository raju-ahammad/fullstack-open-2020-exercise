import React from 'react';
import ReactDOM from 'react-dom';
import Content from './Content';
import Header from './Header';
import Total from './Total';

const App = () => {
  const course = {
      name: "Half Stack development",
      parts: [
          {
            name: "Fundamentals of React",
            exercise: 10
          },
          {
            name: "usinig props to pass data",
            exercise: 7
          },
          {
            name: "state of component",
            exercise: 14
          }
      ]
  }

  
  return (
    <div>
      <Header course={course}  />
      <Content  />
      <Total  />
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))