import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Button = ({text, handleReview}) => {
  return (
    <button onClick={ handleReview }> {text} </button>
  )
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
  const all = review.good + review.neutral + review.bad
  const avg = review.good / all
  const pos = review.good * 100 / all; 

  return (
    <div>
      <h3>give feedback</h3>
      <div>
        <Button text="good" handleReview={ handleGood }/>
        <Button text="neutral" handleReview={ handleNeutral }/>
        <Button text="bad" handleReview={ handleBad }/>
      </div>
      <h3>Statistics</h3>
      <p>good  { review.good }   </p>
      <p>neutral  { review.neutral } </p>
      <p>bad   { review.bad} </p>
      <p>all  { all } </p>
      <p>avarage  { avg } </p>
      <p>Positive  {pos}% </p>
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));

