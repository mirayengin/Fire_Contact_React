
import { initializeApp } from "firebase/app";
import {doc, collection, addDoc ,deleteDoc , getFirestore, onSnapshot, getDoc, updateDoc } from "firebase/firestore"; 
import { useEffect } from "react";


const firebaseConfig = {
  apiKey: "AIzaSyDL3MqclR0FiLMGVkdKX_9GSIrC25WoK18",
  authDomain: "firecontact-f6911.firebaseapp.com",
  projectId: "firecontact-f6911",
  storageBucket: "firecontact-f6911.appspot.com",
  messagingSenderId: "1044951990345",
  appId: "1:1044951990345:web:68cdf0c49b7fb97158ff98"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const db = getFirestore(firebase);


//! database e atmak için
export const addContact = async(info, userId) => {
try {
  const docRef = await addDoc(collection(db, "users"), {
    username: info.username,
    phone: info.phone,
    gender: info.gender,
    userId: userId
  });
} catch (error) {
  console.log(error);
}  
};



//!Bütün database deki verileri okumak için

export const useReadContact = (setContactList) => {
  useEffect(() => {
    onSnapshot(collection(db, "users"), (snapshot) => {
      
        setContactList(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      
    });
   
  }, []);
};


//! id ile istenilen tek datayı çekmek
// export const getDataById = async (id) => {
//   const docRef = doc(db, "users", id);
//   const docSnap = await getDoc(docRef);

//   if (docSnap.exists()) {
//     return docSnap.data();
//   } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
//   }
// };



export const updateContact = (info, ) => {
  console.log("fire update çalıştı");
  console.log('fireUpdate :>> ', info.id);
  const { username, phone, gender, id } = info;
  try {
    const docRef = doc(db, "users", `${id}`);
    updateDoc(docRef, { username, phone, gender });
    // toastSuccessNotify("Updated Successfully!");
  } catch (error) {
    // toastWarnNotify(error.message);
  } finally {
    
    // setEditStatus(false);
  }
};





//! Data silmek
export const deleteTask = async (id) => {
  await deleteDoc(doc(db, "users", id ));
}