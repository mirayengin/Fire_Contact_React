import { useState } from "react";
import AddContact from "./AddContact";
import Contacts from "./Contacts";
import Header from "./Header";

const Home = () => {
  const [addContact, setaddContact] = useState({ name: "", phone: "", gender: "" });
  
  const [contactList, setContactList] = useState([])
  return (
    <div className="h-full flex flex-col md:flex-row gap-4 lg:gap-10 xl:gap-20  items-center justify-center">
      <div className="w-full px-5 sm:px-10 md:px-0 md:w-4/12 lg:w-3/12 h-60 mt-2 md:mt-0 mb-16 md:mb-0">
        <Header header={"Add Contact"} />
        <AddContact addContact={addContact} setaddContact={ setaddContact} />
      </div>
      <div className="w-full px-5 sm:px-10 md:px-0 md:w-3/6 mt-5 md:mt-0">
        <Header header={"Contacts"}  />
        <Contacts />
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Home;
