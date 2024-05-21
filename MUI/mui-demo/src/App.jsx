import { useState } from 'react'
import formTable from './components/table'
import InputForm from './components/InputForm'
import './App.css'
import VariantButtonGroup from './components/buttonGroup'
import ServiceTeamTable from './components/table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <VariantButtonGroup buttonOne="Worker 1" buttonTwo="Worker 2" buttonThree="Worker 3"></VariantButtonGroup>
      <InputForm></InputForm>
      <ServiceTeamTable></ServiceTeamTable>
    </>
  )
}

export default App
