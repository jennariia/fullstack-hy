import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  if(props.allReviews === 0){
    return (
      <div>
        Please give feedback
      </div>
    )
  }
return(
    <div>
      Average: {((props.good*1) + (props.neutral*0) + (props.bad*-1))/props.allReviews} <br/>
      Positives: {props.good / props.allReviews}
    </div>
  )
}


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
      <button onClick={handleGoodReview}>Ebin</button>
      <button onClick={handleNeutralReview}>Neutral</button>
      <button onClick={handleBadReview}>Bad</button>
   
      <h1>Statistics</h1>
      <p>
      Good {good} <br/>
      Neutral {neutral} <br/>
      Bad {bad} <br/>
      Total {allReviews} <br />
      </p>
     <Statistics allReviews={allReviews} good={good} neutral={neutral} bad={bad}/>
    
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
