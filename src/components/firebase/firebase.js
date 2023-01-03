
import { initializeApp } from "firebase/app";
import {doc, collection, addDoc ,deleteDoc , getFirestore, onSnapshot, updateDoc } from "firebase/firestore"; 
import { useEffect } from "react";
import { toastErrorNotify, toastSuccessNotify } from "../../toastffy/ToastNotify";


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
  console.log(docRef)
  toastSuccessNotify("Saved Successfully!");
} catch (error) {
  console.log(error);
  toastErrorNotify("Saved not Successfully!");
}  
};



//!Bütün database deki verileri okumak için

export const useReadContact = (setContactList) => {
  try {
    useEffect(() => {
      onSnapshot(collection(db, "users"), (snapshot) => {
        
          setContactList(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        
      });
  
      // eslint-disable-next-line   
    }, []);
    toastSuccessNotify("Data Read Successfully!");
  } catch (error) {
    toastErrorNotify("Data Read not Successfully!");
  }
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
    toastSuccessNotify("Updated Successfully!");
  } catch (error) {
    toastErrorNotify("Updated not Successfully!");
  }
};





//! Data silmek
export const deleteTask = async (id) => {
  try {
    await deleteDoc(doc(db, "users", id ));
    toastSuccessNotify("Deleted Successfully!");
  } catch (error) {
    toastErrorNotify("Deleted not Successfully!");
  }
}