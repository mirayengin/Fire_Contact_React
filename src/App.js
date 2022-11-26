import { useState } from "react";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import FormComponent from "./components/form/FormComponent";

function App() {
  const [editinfo, setEditinfo] = useState("")
  const [editStatus, setEditStatus] = useState(false)

console.log('editinfo :>> ', editinfo);
console.log('editStatus :>> ', editStatus);


  return (
    <div className="App">
      <FormComponent editStatus={editStatus} setEditStatus={setEditStatus} editinfo={editinfo} />
      <Contacts setEditinfo={setEditinfo} setEditStatus={setEditStatus} />
    </div>
  );
}

export default App;
