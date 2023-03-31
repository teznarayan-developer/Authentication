import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useId, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth, db } from './Firebase';

function Home({user}) {

  const [name , setName] = useState(null);
  // console.log(user);

  const navigate = useNavigate();
  useEffect(() => {
    const getUsersInfo = async () => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      console.log(docRef, docSnap);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        // console.log(userData);
        setName(userData?.name);

      } else {
        console.log("User does not exists");
      }
    };

    getUsersInfo();
  }, [user]);

// console.log(name);
  async function logout(){
    await signOut(auth);
  alert("user signed out!");
    navigate("/signin")
   }
  return (
    <div>
     <h1> This is Home page you're Signin.... </h1>
      <br></br>
      <h4>Hello...... {name}</h4>
      {/* <p>{user?.email}</p> */}
      <button onClick={logout}>LogOut</button>
    </div>
  )
}

export default Home;