import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VariantButtonGroup from './components/buttonGroup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <VariantButtonGroup buttonOne="Worker 1" buttonOne="Worker 2" buttonOne="Worker 3"></VariantButtonGroup>
      
    </>
  )
}

export default App
