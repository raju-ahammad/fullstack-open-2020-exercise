import React from 'react';
import ReactDOM from 'react-dom';
import Content from './Content';
import Header from './Header';
import Total from './Total';

const App = () => {
  const course = "Half Stack development";
  const exercise1 = 10;
  const exercise2 = 7;
  const exercise3 = 14
  return (
    <div>
      <Header course={course} />
      <Content />
      <Total exercise={exercise1+exercise2+exercise3} />
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))