import { useState } from "react";


const Button = (props) =>{
  console.log(props)
  const{onClick , text} = props
  return(
    <button onClick = {onClick}>
    {text}
    </button> 
  )
}

const StatisticLine =(props) => {
  const {text , value} = props
  return(
      <tr>
      <td>{text} </td>
      <td>{value}</td>
      </tr>
  )
}

const Statistic = (props) =>{
  const{good , neutral, bad} = props
  const total = good + neutral + bad
  const avarage = (good*1 + neutral*0 + bad*-1) / total
  const positive = (good/total) *100 
  if(total ===0){
    return(
  <div>
    No Feedback given
  </div>
    )
  }
  return(
    <div>
      <StatisticLine text = 'good' value = {good}/>
      <StatisticLine text = 'neutral' value = {neutral}/>
      <StatisticLine text = 'bad' value = {bad}/>
      <StatisticLine text = 'total' value = {total}/>
      <StatisticLine text = 'avarage' value = {avarage}/>
      <StatisticLine text = 'positive' value = {positive + '%'}/>
    </div>
  )
}



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral]= useState(0)
  const [bad ,setBad]= useState(0)
  const all = good + bad + neutral
  
  const goodreview = () =>{
    const updatedgood = good + 1
    console.log(updatedgood)
    setGood(updatedgood)
  }

  const neutralreview =() =>{
    const updatedneutral = neutral + 1
    console.log(updatedneutral)
    setNeutral(updatedneutral)
  }

  const badreview =() => {
    const updatedbad = bad +1
    console.log(updatedbad)
    setBad(updatedbad)
  }

  const reset =() =>{
    setGood(0)
    setNeutral(0)
    setBad(0)
    
  }

return(
  <div>
    <h1>give feedback</h1>
    <Button onClick = {goodreview} text = 'good'/>
    <Button onClick = {neutralreview} text = 'neutral'/>
    <Button onClick = {badreview} text = 'bad'/>
    <Button onClick = {reset} text = 'reset'/>
    <h1>Statistic</h1>
    <Statistic good = {good} neutral = {neutral} bad = {bad}/>
  </div>

)
}
export default App