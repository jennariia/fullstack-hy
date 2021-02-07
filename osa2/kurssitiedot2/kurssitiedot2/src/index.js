import React from 'react';
import ReactDOM from 'react-dom';


const Header = (course) => {
  console.log(course.course.name)
  return (
    <div>
<h1>{course.course.name}</h1>
</div>
  )
}

const Content = (course) => {
 // console.log(parts.parts.length)
  return(
  <div>
   <Part part = {course.course.parts[0].name} exercises = {course.course.parts[0].exercises}/>
   <Part part = {course.course.parts[1].name} exercises = {course.course.parts[1].exercises}/>
   <Part part = {course.course.parts[2].name} exercises = {course.course.parts[2].exercises}/>
  </div>
  //<Part part = {parts.parts[0].name} exercises = {parts.parts[0].exercises}/>
  // <Part part = {parts.parts[1].name} exercises = {parts.parts[1].exercises}/>
  // <Part part = {parts.parts[2].name} exercises = {parts.parts[2].exercises}/>
  // <Part part = {parts[]} exercises = {props.exercises1}/>
  //<Part part = {parts[0].name}/>
  // <Part part = {props.part2} exercises = {props.exercises2}/>
  // <Part part = {props.part3} exercises = {props.exercises3}/>
  )
}

const Part = (props) => {
  //console.log(props)
  return(
    <div>
    <p>
    {props.part} {props.exercises}
    </p>
    </div>
  )
} 

const Total = (course) => {
  //console.log(props)
return (
<>
<p>Number of exercises {course.course.parts[0].exercises + course.course.parts[1].exercises + course.course.parts[2].exercises} </p>
</>
// {parts.parts[0].exercises + parts.parts[1].exercises + parts.parts[2].exercises}
)
} 

const App = () => {
const course = {
name: 'Half Stack application development',
parts: [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  } 
]
}

return (
  <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
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
