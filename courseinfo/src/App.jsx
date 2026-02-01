const Header = (props) =>{
  console.log(props)
  return(
    <>
    <h1>{props.course.name}</h1>
    </>
  )
}

const Part = (props) =>{
  console.log(props)
  
  return(
    <>
    <p>{props.name}  {props.exercise}</p>
    </>
  )
}

const Content = (props) =>{
  console.log(props)
  return(
    <div>
    {props.parts[0].name} {props.parts[0].exercises} <br></br>
    {props.parts[1].name} {props.parts[1].exercises} <br></br>
    {props.parts[2].name} {props.parts[2].exercises}
    </div>
  )
}

const Total =(props) => {
  console.log(props)
  return(
    <>
    total Exercises = {props.parts[0].exercises+props.parts[1].exercises+ props.parts[2].exercises}
    </>
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
    <>
      <Header course = {course} />
      <Content parts= {course.parts} />
      <Total parts = {course.parts} />
      
    </>
  )
}

export default App