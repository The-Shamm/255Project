import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function InputForm({ onSubmit }) {
  cont[(FormInput, setFormInput)] = useState({
    serviceteamName: "",
    serviceteamProject: "",
    serviceteamDescription: "",
    serviceTeamAlarms: "",
    serviceteamDependencies: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevData) => ({ ...prevData, [name]: value }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(FormInput);
    setFormInput({
      question1: '',
      question2: '',
      question3: ''
    });
  };


  return (
    <form onSubmit={handleSubmit}>
    <TextField
      name="question1"
      label="Question 1"
      value={formData.question1}
      onChange={handleChange}
      fullWidth
      margin="normal"
    />
    <TextField
      name="question2"
      label="Question 2"
      value={formData.question2}
      onChange={handleChange}
      fullWidth
      margin="normal"
    />
    <TextField
      name="question3"
      label="Question 3"
      value={formData.question3}
      onChange={handleChange}
      fullWidth
      margin="normal"
    />
    <Button type="submit" variant="contained" color="primary">
      Submit
    </Button>
  </form>
);
}

 









  






