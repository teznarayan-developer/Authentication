import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { auth } from "./firebase-config";
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "./Redux/slice/slice";
import HomePage from "./HomePage";
import { db } from "./firebase-config";
import { collection, doc, addDoc, setDoc, getDoc } from "firebase/firestore";
import PrivateRoute from "./PrivateRoute";

function App() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  const [loading, setLoading] = useState(true);

  const userInfo = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();
  console.log("user from state", userInfo);

  useEffect(() => {
    // setLoading(true);
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        dispatch(createUser(currentUser.refreshToken));
        // setLoading(false);
        navigate("/home");
        // console.log("name", currentUser.displayName);
      } else {
        setUser(null);
        dispatch(createUser(undefined));
      }
    });
  }, []);

  console.log(user);

  // console.log("user", user);

  // console.log("auth value", auth.value);

  //REGISTER
  const handleRegister = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );

      navigate("/login");
      // user.updateProfile({
      //   displayName: name,
      // });

      // user.displayName = name;
      // console.log(user.displayName);
      console.log("Registered user: ", user);

      // const docRef = await addDoc(doc(db, "users", user.uid), {
      //   email: registerEmail,
      //   uid: user.uid,
      //   name: name,
      //   // registeredAt: Timestamp.fromDate(new Date()),
      // });

      console.log("Document written with ID: ", docRef.id);

      const userId = user.user.uid;
      console.log(userId);

      const docRef = await setDoc(doc(db, "users", userId), {
        name: name,
        email: registerEmail,
      });
      console.log("Document written with ID: ", docRef);
    } catch (err) {
      console.log(err.message);
      if (err.code === "auth/invalid-email") {
        alert("Invalid email address and/or password");
      } else {
        console.log("Other error handling method");
      }
    }
  };

  //LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log("Login User", user);
      navigate("/home");
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        alert("Invalid email address and/or password");
      } else {
        console.log("Other error handling method");
      }
    }
  };

  //PROVIDER
  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: "select_account" });

  //GOOGLE SIGN IN
  const signInWithGoogle = async () => {
    try {
      const user = await signInWithPopup(auth, googleProvider);
      console.log(user);
      const name = user.user.displayName;
      const email = user.user.email;
      const profilePic = user.user.photoURL;
      const userId = user.user.uid;
      console.log(name, email, profilePic, userId);
      console.log(userId);

      const userDocRef = doc(db, "users", userId);
      console.log(userDocRef);

      const userSnapshot = await getDoc(userDocRef);
      console.log("SNAPSHOT:", userSnapshot);

      //user snap shot does not exists
      if (!userSnapshot.exists()) {
        // const { displayName, email } = userAuth;
        // console.log(displayName, email);
        const createdAt = new Date();
        try {
          const docRef = await setDoc(doc(db, "users", userId), {
            name,
            email,
            profilePic,
            id: userId,
            role: "user",
            createdAt,
          });
          console.log("google doc ref", docRef);
        } catch (error) {
          if (error.code === "auth/email-already-in-use") {
            alert("Invalid email id");
          } else {
            console.log("error creating the user", error.message);
            alert("error creating the user", error.message);
          }
        }
      }
      navigate("/home");
      return userDocRef;
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    alert("user signed out!");

    navigate("/");
  };

  //SAVE USER'S STATE
  // (async () => {
  //   await setPersistence(auth, browserLocalPersistence);
  // })();

  return (
    <div className="App">
      {/* <p> {user?.email}</p> */}
      {/* <p>{user?.name}</p> */}
      <Routes>
        <Route
          path="/"
          element={
            <RegisterPage
              setRegisterEmail={setRegisterEmail}
              setRegisterPassword={setRegisterPassword}
              handleRegister={handleRegister}
              setName={setName}
              signInWithGoogle={signInWithGoogle}
            />
          }
        />

        <Route
          path="/login"
          element={
            <LoginPage
              setLoginEmail={setLoginEmail}
              setLoginPassword={setLoginPassword}
              handleLogin={handleLogin}
            />
          }
        />

        <Route
          path="/home"
          element={
            <PrivateRoute user={user}>
              <HomePage user={user} handleLogout={handleLogout} />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

// request.time < timestamp.date(2022, 8, 19)