import React from 'react'

const Course = (courses) => {
    console.log(courses.courses)
  
    //console.log(course)
    return(
      <div>
          {courses.courses.map(course =>
            <div>
            <Header header = {course.name} />
            {course.parts.map(part => <Content part = {part} />  )}
  
            <Total total = {course.parts.reduce((sum, total) => sum + total.exercises, 0)} />
            </div>
            )}
      </div>
    )
  
  }
  
  const Header = (header) => {
   console.log(header.header)
    return (
      <div>
      <h1> {header.header} </h1>
      </div>
    )
  }

  const Content = (part) => {
    console.log(part)
      return(
        <div>
            <p key ={part.part.id}> {part.part.name} {part.part.exercises}</p>
        </div>
      )
    }
    
    const Total = (total) => {
      console.log(total)
    
      
      return(
        <div>
          <p>Total amount of exercises:  {total.total} </p>
        </div>
      )
    }

export default Course