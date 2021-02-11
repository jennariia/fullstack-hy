import React from 'react';
import ReactDOM from 'react-dom';
import Course from './Course'

const App = () => {
const courses = [
  {
name: 'Half Stack application development 2.0',
id: 1,
parts: [
  {
    name: 'Fundamentals of React',
    exercises: 10,
    id: 1
  },
  {
    name: 'Using props to pass data',
    exercises: 7,
    id: 2
  },
  {
    name: 'State of a component',
    exercises: 14,
    id: 3
  }, 
  {
    name: 'Redux',
    exercises: 17,
    id: 4
  } 
]
},
{
name: 'node.js',
id: 2,
parts: [
  {
    name: 'Routing',
    exercises: 3,
    id: 1
  },
  {
    name: 'Middlewares',
    exercises: 7,
    id: 2
  }
]
}
]

return (
  <div>
      <Course courses={courses} />
  </div>
)

}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
