import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) =>
  (
    <button onClick={props.handleClick}>{props.text}</button>
  )

const Header = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array.apply(null, Array(props.anecdotes.length)).map(Number.prototype.valueOf,0))

  const copyVotesArray = [...votes];

  const getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const lastIndexOfAnecdotes = props.anecdotes.length - 1;

  const indexOfMostVotes = copyVotesArray.indexOf(Math.max(...copyVotesArray));

  const nextAnecdote = () => {
    setSelected(getRandomInteger(0, lastIndexOfAnecdotes))
  }

  console.log(indexOfMostVotes)

  const VotesCounter = (props) => {
    return (
      <p>has {votes[selected]} votes.</p>
    )
  }

  const vote = () => {
    copyVotesArray[selected] += 1
    setVotes(copyVotesArray)
  }

  return (
    <div>
      <Header text={'Anecdote of the day'} />
      {props.anecdotes[selected]}
      <VotesCounter />
      <Button handleClick={vote} text={'Vote'} />
      <Button handleClick={nextAnecdote} text={'Next anecdote'} />
      <Header text={'Anecdote with most votes'} />
      {props.anecdotes[indexOfMostVotes]}
      <VotesCounter />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
