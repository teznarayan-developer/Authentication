import React, { useState } from 'react';
import {createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import { auth, db } from "./Firebase";
import { doc, setDoc } from 'firebase/firestore';

function Regisration() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPssword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  // onAuthStateChanged(auth, (currentUser)=>{setUser(currentUser)})

    async function register(e){
        e.preventDefault()
     try{
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      const userId = user.user.uid;
      console.log(userId);
      const docRef = await setDoc(doc(db, "users", userId), {
        name : name,
        mobile : mobile,
        email : registerEmail
      });
      console.log(user)}
      catch (error){
        console.log(error.message);
        console.error(error);
        
      
      };  
      setRegisterEmail("");
      setRegisterPssword("");
      setName("");
      setMobile("");
    }
    
   
  return (
    
    <div className='main-block'>
      <div>
      <h1>Registration Form </h1>
      </div>
      <form onSubmit={register}>
      <div className='email'>
      <lable>Name </lable>
        <input type='text' value={name} onChange={(event)=>{setName(event.target.value)}}></input>
       </div>
        <div className='email'>
      <lable>Email </lable>
        <input type='email' value={registerEmail} onChange={(event)=>{setRegisterEmail(event.target.value)}}></input>
        </div>
        <div className='email'>
      <lable>Password </lable>
        <input type='password' value={registerPassword} onChange={(event)=>{setRegisterPssword(event.target.value)}}></input>
        </div>
        <div className='email'>
      <lable>Mobile No.  </lable>
        <input type='text' value={mobile} onChange={(event)=>{setMobile(event.target.value)}}></input>
        </div>
        <button >Submit</button>
      </form>
    </div>
    
  )
}

export default Regisration;