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
                    <div key = {part.id}>
					<Part id={part.id} name={part.name} exercises={part.exercises} />
				</div>
                );
			})}
   
    
   
    
    
    </div>
  )
}

const Course = ({course}) => {
  
   
  return (
    <div>
    {course.map((courses)=> {
      return (
        <div key = {courses.id}>
        <Header c_name = {courses.name} id = {courses.id} />
        <Content  course = {courses} />
        <Total course = {courses}/>
</div>
      )
    })}
    
    
   
    {/**/}
    </div>
  )

}

export default Course