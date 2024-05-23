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
<div>
<h1>***Creator notes for future feature releases***</h1>
<p>Here are some examples of links to other pages</p>
<ul><p></p></ul>
<nav>
  <ul>
    <li>
      <a href="profile">Profile page test</a><br></br>
      <a href="profile">Phonebook page</a>
    </li>
  </ul>
</nav>
</div>


      {/*<VariantButtonGroup buttonOne="Worker 1" buttonTwo="Worker 2" buttonThree="Worker 3" />*/}
      <InputForm onSubmit={handleSubmit} />
      <ServiceTeamTable data={formData} />
   


 </>
)



}



export default App
