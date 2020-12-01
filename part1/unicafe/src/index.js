import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Button = ({text, handleReview}) => {
  return (
    <button onClick={ handleReview }> {text} </button>
  )
}

const Statistic  = ({ good, bad, neutral, all, avg, pos }) => {
  return (<div>
    <table>
      <tbody>
      <tr>
        <th></th>
        <th> </th>
      </tr>
      <tr>
        <td>good</td>
        <td> {good} </td>
      </tr>
      <tr>
        <td>neutral</td>
        <td> {neutral} </td>
      </tr>
      <tr>
        <td>bad</td>
        <td> {bad} </td>
      </tr>
      <tr>
        <td>all</td>
        <td> {all} </td>
      </tr>
      <tr>
        <td>avarage</td>
        <td> {avg} </td>
      </tr>
      <tr>
        <td>positive</td>
        <td> {pos} </td>
      </tr>
      </tbody>
    </table> 
  </div> )
}

const Statistics = ({ good, neutral, bad, review }) => {
  const all = review.good + review.neutral + review.bad
  const avg = review.good / all
  const pos = review.good * 100 / all; 
  if (all === 0){
    return (<div>
      <h3>Statistics</h3>
      <h4>No feedback given</h4>
    </div>);
  }
  return (
    <div>
      <h3>Statistics</h3>
      <Statistic good={ good } bad={ bad } neutral={ neutral} all={all} avg = {avg} pos ={ pos } />
      
    </div>
  );
}

const App = () => {
  const initialReview = {
    good: 0,
    neutral: 0,
    bad : 0
  }
  const [review, setReview] = useState(initialReview);

  const handleGood = () => {
    setReview({...review, good: review.good +1})
  }
  const handleNeutral = () => {
    setReview({...review, neutral: review.neutral +1})
  }
  const handleBad = () => {
    setReview({...review, bad: review.bad +1})
  }
  

  return (
    <div>
      <h3>give feedback</h3>
      <div>
        <Button text="good" handleReview={ handleGood }/>
        <Button text="neutral" handleReview={ handleNeutral }/>
        <Button text="bad" handleReview={ handleBad }/>
      </div>
      <Statistics good = { review.good } review = { review } bad={ review.bad } neutral = { review.neutral }/>
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));

