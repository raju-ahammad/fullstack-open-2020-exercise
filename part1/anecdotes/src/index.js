import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const App = ({anecdotes}) => {
  const initialVote = new Array(anecdotes.length).fill(0)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(initialVote)
  
  const nextCdotes = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length + 1))
    console.log("ancdte Selected:", selected);
  }

  const voteHandle = () => {
    const newVotes = [...votes]
    newVotes[selected] +=1
    setVotes(newVotes)
    console.log("vote Selected:", selected);
  }

  const maxVoteIndex = votes.indexOf(Math.max(...votes));
  return( <div>
    <h3>Ancodate of the day</h3>
    <p>{anecdotes[selected]}</p>
    <p>has {votes[selected]} votes </p>
    <button onClick={ voteHandle }>vote</button>
    <button onClick={ nextCdotes }>nextanecdote</button>
    <h3>Ancodates with most votes</h3>
    <p> { anecdotes[maxVoteIndex] } </p>
    <p> { votes[maxVoteIndex] } </p>
  </div> );
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes= {anecdotes} />, document.getElementById('root'));

