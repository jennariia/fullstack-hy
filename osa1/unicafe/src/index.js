import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  if(props.allReviews === 0){
    return (
      <>
       <tr><td>Please give feedback </td></tr>
      </>
    )
  }
return(<>
     <StatisticLine text="Average:" value={(((props.good*1) + (props.neutral*0) + (props.bad*-1))/props.allReviews).toFixed(2)}/>
      <StatisticLine text="Positives:" value={((props.good / props.allReviews)*100).toFixed(1) + '%'} /></>
  )
}

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticLine = ({value, text}) => (
 <tr>
   <td>{text}</td>
   <td> </td>
   <td>{value}</td>
 </tr>
)


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  //for calculating the averages
  const [allReviews, setAll] = useState(0)

  const handleGoodReview = () => {
    setGood(good+1)
    setAll(allReviews+1)
  }

  const handleNeutralReview = () => {
    setNeutral(neutral+1)
    setAll(allReviews+1)
  }

  const handleBadReview = () => {
    setBad(bad+1)
    setAll(allReviews+1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      
      <Button onClick={handleGoodReview} text='Ebin'/>
      <Button onClick={handleNeutralReview} text='Neutral' />
      <Button onClick={handleBadReview} text='Bad'/>

      <h1>Statistics</h1>
      <table><thead>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="Total" value={allReviews}/>
  
      <Statistics allReviews={allReviews} good={good} neutral={neutral} bad={bad}/>
      </thead></table>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
