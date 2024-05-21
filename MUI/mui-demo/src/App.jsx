import { useState } from 'react'
import table from './components/table'
import './App.css'
import VariantButtonGroup from './components/buttonGroup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <VariantButtonGroup buttonOne="Worker 1" buttonTwo="Worker 2" buttonThree="Worker 3"></VariantButtonGroup>
      
    </>
  )
}

export default App
