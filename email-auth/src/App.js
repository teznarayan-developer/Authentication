import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { async } from '@firebase/util';
import { Link, Route, Routes } from 'react-router-dom';
import Regisration from './Component/Regisration';
import NavBar from './Component/NavBar';
import SingIn from './Component/SingIn';
import APIPostMethod from './Component/APIPostMethod';
import API from './Component/APIGetMethod';
import Home from './Component/Home';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Component/Firebase';
import Print from './Component/Filter/Print';

function App() {
  const [user, setUser] = useState("");
 
console.log(user);
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        
        // console.log("name", currentUser.displayName);
      } else {
        setUser(null);
      }
      ;
    });
  }, [])

  return (
    <div>
         <NavBar />
     <Routes>
      <Route path='/' element={<Regisration />} /> 
      <Route path='/signin' element={<SingIn />} /> 
      <Route path='/post' element={<APIPostMethod />} /> 
      <Route path='/get' element={<API />} /> 
      <Route path='/home' element={<Home user={user}/>} /> 
     </Routes>
     {/* <Print /> */}
    </div>
  );
}

export default App;
