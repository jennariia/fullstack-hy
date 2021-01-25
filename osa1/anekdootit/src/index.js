import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(new Array(6).fill(0))
    const [maximum, setMaximum] = useState(0)

  const handleRandom = () => {
    //console.log(Math.floor(Math.random()*6))
     const newSelected = (Math.floor(Math.random()*6))
     setSelected(newSelected)
    
  }

  const handleVote = () => {
     //console.log(anecdotes[selected])
     //console.log(selected)
    const copy = [...points]
    copy[selected] += 1
    //console.log(copy)

    setPoints(copy)

    let maximum = points.indexOf(Math.max(...points))
    setMaximum(maximum)
  }

  return(
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]} <br /> <br />
     <button onClick={handleRandom}>
       set anecdote
       
     </button>

     <button onClick={handleVote}>
       vote
     </button>
     <br />

     has {points[selected]} votes <br /> 

     <h1>Winning anecdote</h1> <br />

     {props.anecdotes[maximum]}
    <br/>
    has {points[maximum]} votes

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals()
