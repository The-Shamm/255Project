import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PropTypes from 'prop-types';


const InputForm = ({onSubmit }) => {
  const [formInput, setFormInput] = useState({
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
    onSubmit(formInput);
    setFormInput({
      serviceteamName: "",
      serviceteamProject: "",
      serviceteamDescription: "",
      serviceTeamAlarms: "",
      serviceteamDependencies: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="serviceteamName"
        label="Service Team Name"
        value={formInput.serviceteamName}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="serviceteamProject"
        label="Service Team Project"
        value={formInput.serviceteamProject}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="serviceteamDescription"
        label="Service Team Description"
        value={formInput.serviceteamDescription}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="serviceTeamAlarms"
        label="Service Team Alarms"
        value={formInput.serviceTeamAlarms}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="serviceteamDependencies"
        label="Service Team Dependencies"
        value={formInput.serviceteamDependencies}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}; 

InputForm.PropTypes = {
  onSubmit: PropTypes.func.isRequired,
  serviceteamName: PropTypes.string.isRequired,
};

InputForm.PropTypes = {
  onSubmit: 'ServiceXYZ',
};

export default InputForm;