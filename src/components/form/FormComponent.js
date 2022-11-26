import React, { useEffect, useState } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  TextField,
  InputAdornment,
  MenuItem,
  Button,
  Stack,
  Select,
  Box,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import { addContact, updateContact } from "../firebase/firebase";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FormComponent = ({ editinfo, setEditStatus, editStatus }) => {

  console.log('editinfo :>> ', editinfo[0]);
  console.log('editStatus :>> ', setEditStatus);


  const [info, setInfo] = useState({ username: "", phone: "", gender: "" });
 

  const handleInfo = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };


  const handleAdd = (e) => {
    e.preventDefault();
    const userId = new Date().getMilliseconds();

    addContact(info, userId);

    setInfo({ username: "", phone: "", gender: "" });
  };

useEffect(() => {
  editStatus && setInfo({ username: editinfo[0].username, phone: editinfo[0].phone, gender: editinfo[0].gender, id:editinfo[0].id })
  
  console.log(editStatus);

  console.log('useeffect çaalıştı :>> ');
},[editStatus])


console.log('info :>> ', info);

const handleUpdate = () => {
  // e.preventDefault()
  updateContact(info, setEditStatus)
  setEditStatus(!editStatus)
  setInfo({ username: "", phone: "", gender: "" });
    
    
  }







  return (
    <Grid
      textAlign="center"
      verticalAlign="middle"
      direction="column"
      style={{ width: "300" }}
    >
      <p className="contact-header">
        <div>
          <a
            href="https://www.linkedin.com/in/erhan-firat/"
            className="design"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>{"Erhan FIRAT"}</code>
          </a>
        </div>

      </p>
      <h2 className="contact-header">Add Contact</h2>

      <Box style={{ backgroundColor: "white", padding: "20px",background:"linear-gradient( yellow 50%, green 75%)" }}>
        <form onSubmit={handleAdd} >
          <Stack spacing={3} direction="column">
            <TextField
              required
              variant="outlined"
              name="username"
              value={info.username}
              onChange={handleInfo}
              placeholder="Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              required
              variant="outlined"
              name="phone"
              value={info.phone}
              onChange={handleInfo}
              placeholder="Phone Number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneEnabledIcon />
                  </InputAdornment>
                ),
              }}
            />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel style={{ paddingLeft: "20px" }}>Gender</InputLabel>
              <Select
                required
                label="Gender"
                name="gender"
                variant="outlined"
                value={info.gender}
                onChange={handleInfo}
              >
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
            {!editStatus && (
              <Button  variant="contained" type="submit" value="Submit">
                ADD
              </Button>
            )}
            {editStatus && (
              <Button onClick={handleUpdate} variant="contained" type="submit" value="Submit">
                UPDATE
              </Button>
            )}

          </Stack>
        </form>
      </Box>
    </Grid>
  );
};

export default FormComponent;
