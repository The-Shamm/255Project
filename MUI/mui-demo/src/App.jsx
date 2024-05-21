import { useState } from 'react'
import ServiceTeamTable from './components/table'
import InputForm from './components/InputForm'
import './App.css'
import VariantButtonGroup from './components/buttonGroup'

function App() {
  const [formData, setFormData] = useState([]);

  const handleSubmit = (formDataItem) => {
    setFormData(prevData => [...prevData, formDataItem]);
  };

  return (
    <>
      <VariantButtonGroup buttonOne="Worker 1" buttonTwo="Worker 2" buttonThree="Worker 3" />
      <InputForm onSubmit={handleSubmit} />
      <ServiceTeamTable data={formData} />
    </>
  )
}

export default App
