import React, { useEffect, useState } from 'react';
import {signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth';
import { auth } from './Firebase';
import { useNavigate } from 'react-router-dom';

function SingIn() {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setloginPassword] = useState("")
  // const [user, setUser] = useState("");

  async function register(e){
    e.preventDefault()
    try{
     const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
     console.log(user)
     navigate("/home")
     }
     catch (error){
       console.log(error.message);
       if (error.code === "auth/invalid-email") {
        alert("Invalid email address and/or password");
      } else {
        console.log("Other error handling method");
      }
      //  error.preventDefault();
     }; 
     setLoginEmail("");
     setloginPassword("");
   }

  //  console.log(loginEmail,
  //   loginPassword);

// useEffect(()=>{
//   onAuthStateChanged(auth, (currentUser) => {
//     if (currentUser) {
//       setUser(currentUser);
//       navigate("/home");
//       // console.log("name", currentUser.displayName);
//     } else {
//       setUser(null);
//     }
//     ;});
// },[])


// async function logout(){
//   await signOut(auth);
//  }
  //  console.log(uuser);
 return (

    <div className='main-block'>
      <div>
      <h1>Login Form </h1>
      </div>
        <form className='signin' onSubmit={(e)=>register(e)}>
    <div className='email'>
            <label>
            Email 
            </label>
            <input type="email" placeholder='Email' value={loginEmail} onChange={(event)=>{setLoginEmail(event.target.value)}} /> </div>
              <div className='pass'>
            <label>
            Password  </label>
            <input type="password" placeholder='Password' value={loginPassword} onChange={(event)=>{setloginPassword(event.target.value)}} />
            </div>

            <div className='btn-container'>
            <button >Sign In</button>
            {/* {uuser?.email} */}
            </div>
        </form>
        <div className='button'>
        {/* <button onClick={logout}>LogOut</button> */}
        </div>
    </div>
  )
}

export default SingIn;