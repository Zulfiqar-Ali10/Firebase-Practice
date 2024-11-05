import './App.css'
import { app } from './assets/firebase';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import SignUp from './assets/Pages/signup';
import SignIn from './assets/Pages/sigin';
import { useEffect, useState } from 'react';


const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        console.log("You are logout");
        setUser(null)
      }
    })
  }, [])


  const signupUser = () => {
    createUserWithEmailAndPassword(
      auth,
      "zulfiqardev@gmail.com",
      "zulfiqar110",
    ).then((value) => console.log(value));
  };

  if (user == null) {
    return (
      <div className="App">
        <SignUp />
        <SignIn />
      </div>
    )
  }


  return (
    <>
      <div className="App">
        <h1>Hello  {user.email} </h1>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </>
  )
}

export default App
