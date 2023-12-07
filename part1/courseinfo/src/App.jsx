const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>

    </div>
  )

}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.number}</p>
    </div>
  )

}

const Content = (props) => {
  return (
    <div>
      <Part part = {props.part1} number = {props.number1}/>
      <Part part = {props.part2} number = {props.number2}/>
      <Part part = {props.part3} number = {props.number3}/>
      
      
    </div>
  )

}
const Total = (props) => {
  return (
    <div>
      <p>{props.sum}</p>
    </div>
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
      <Header course = {course.name} />
      <Content part1 = {course.parts[0].name} number1 = {course.parts[0].exercises} part2 = {course.parts[1].name} number2 = {course.parts[1].exercises}  part3 = {course.parts[2].name} number3 = {course.parts[2].exercises}/>
      <Total sum = {course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises} />
      
    </div>
  )
}

export default App