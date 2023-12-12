const Header = ({ c_name ,id}) => <h1 key = {id}>{c_name}</h1>

const Part = ({id,name,exercises}) => {
  
  return (
    <>
      <p key = {id}>{name} {exercises}</p>
    </>
  )

}

const Total = ({course}) => {
  const sum = course.parts.reduce((a,c) => a+c.exercises,0)
  
  
  return(
    <>
   
    <p>total of {sum} exercises</p>
    </>
  )
}

const Content = ({course}) => {
 
 

 
  return (
    <div> 

{course.parts.map((part) => {
				return (
					<Part id={part.id} name={part.name} exercises={part.exercises} />
				);
			})}
   
    
   
    
    
    </div>
  )
}

const Course = ({course}) => {
  
   
  return (
    <>
    {course.map((courses)=> {
      return (
        <>
        <Header c_name = {courses.name} id = {courses.id} />
        <Content course = {courses} />
        <Total course = {courses}/>
</>
      )
    })}
    
    
   
    {/**/}
    </>
  )

}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
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
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
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


  return <Course course={courses} />
}

export default App