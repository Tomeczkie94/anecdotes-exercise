import React, { useState } from 'react'
import Header from './Header.js';
import Button from './Button.js';
import VotesCounter from './VotesCounter.js'

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(props.anecdotes.length).fill(0));
  const copyVotesArray = [...votes];
  const getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const lastIndexOfAnecdotes = props.anecdotes.length - 1;
  const indexOfMostVotes = copyVotesArray.indexOf(Math.max(...copyVotesArray));
  const nextAnecdote = () => {
    setSelected(getRandomInteger(0, lastIndexOfAnecdotes))
  }

  const vote = () => {
    copyVotesArray[selected] += 1
    setVotes(copyVotesArray)
  }
  return (
    <div>
      <Header text={'Anecdote of the day'} />
      {props.anecdotes[selected]}
      <VotesCounter text={copyVotesArray[selected]}/>
      <Button handleClick={vote} text={'Vote'} />
      <Button handleClick={nextAnecdote} text={'Next anecdote'} />
      <Header text={'Anecdote with most votes'} />
      {props.anecdotes[indexOfMostVotes]}
      <VotesCounter text={copyVotesArray[indexOfMostVotes]} />
    </div>
  )
}

export default App;
