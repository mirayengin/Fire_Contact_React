import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";
import { useState } from "react";
// import { useEffect } from "react";
import { deleteTask, useReadContact } from "../firebase/firebase";
import AutoDeleteIcon from "@mui/icons-material/AutoDelete";
import EditIcon from "@mui/icons-material/Edit";

const Contacts = ({setEditStatus,setEditinfo}) => {
  const [contactList, setContactList] = useState([]);

  useReadContact(setContactList, contactList);
  console.log("contactList", contactList);

  const handleDelete = (id) => {
    console.log("id:", id);
    deleteTask(id);
  };

  const handleEdit = (id) => {
    let editData1 = contactList.filter((item) => id === item.id)
    console.log('editData :>> ', editData1);
    setEditinfo(editData1)
    setEditStatus(true)
  };

  return (
    <div>
      <h2 className="contact-header">Contacts</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650,background:"linear-gradient( orange 50%, green 75%)", boxShadow:"2rem 2rem 1rem white" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize:"1.2rem",fontWeight:"bold"}} align="left">Username</TableCell>
              <TableCell sx={{ fontSize:"1.2rem",fontWeight:"bold"}} align="left">Phone Number</TableCell>
              <TableCell sx={{ fontSize:"1.2rem",fontWeight:"bold"}} align="left">Gender</TableCell>
              <TableCell sx={{ fontSize:"1.2rem",fontWeight:"bold"}} align="left">Delete</TableCell>
              <TableCell sx={{ fontSize:"1.2rem",fontWeight:"bold"}} align="left">Edit</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {contactList?.map((item) => {
              const { username, phone, gender, id} = item;
              return (
                <TableRow  key={id}>
                  <TableCell sx={{color:"blue", fontWeight:"bold"}}>{username}</TableCell>
                  <TableCell sx={{color:"blue", fontWeight:"bold"}} align="left">{phone}</TableCell>
                  <TableCell sx={{color:"blue", fontWeight:"bold"}} align="left">{gender}</TableCell>
                  <TableCell sx={{color:"red", fontWeight:"bold",cursor:"pointer"}} align="left">
                    <AutoDeleteIcon sx={{"&:hover":{color:"black",boxShadow:"1px 2px 1px 1px white"}}} onClick={() => handleDelete(id)} />
                  </TableCell>
                  <TableCell sx={{color:"black", fontWeight:"bold",cursor:"pointer"}} align="left">
                    <EditIcon sx={{"&:hover":{color:"red",boxShadow:"1px 2px 1px 1px white"}}} onClick={() => handleEdit(id)} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Contacts;
