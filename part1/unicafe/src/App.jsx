import { useState } from 'react'


const StatisticLine = (props) => {

  return(
    
      
          
            <tr >
              <td>{props.text}</td>
              
              <td>{props.value}</td>
              </tr>

      
      
      

    
  )
}

const Statistics = (props) => {
  const all = props.good + props.bad + props.neutral
  const average = (props.good - props.bad)/ all
  const positive = (props.good / all) * 100 + '%'

if (all == 0) {
  return(
    <p>No feedback given</p>
  )
}
else {
  return(
    <div>
      <table>
        <tbody>
      <StatisticLine text = 'good' value = {props.good} />
      <StatisticLine text = 'neutral' value = {props.neutral} />
      <StatisticLine text = 'bad' value = {props.bad} />
      <StatisticLine text = 'all' value = {all} />
      <StatisticLine text = 'average' value = {average} />
      <StatisticLine text = 'positive' value = {positive} />
      </tbody>
      </table>
      </div>
   
  )
  }


}

const Button = (props) => {


  return(
    
      <button onClick={() => props.feedback(props.value+1)}>{props.text}</button>
    
  )

}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  

 
  
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button text = 'good' feedback = {setGood} value = {good} />
      <Button text = 'neutral' feedback = {setNeutral} value = {neutral} />
      <Button text = 'bad' feedback = {setBad} value = {bad} />
      <h1>statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
      
     
    </div>
  )
}

export default App