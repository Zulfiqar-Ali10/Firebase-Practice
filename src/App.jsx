import './App.css'
import { app } from './assets/firebase';
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
import SignUp from './assets/Pages/signup';
import SignIn from './assets/Pages/sigin';


const auth = getAuth(app);

function App() {
  const signupUser = () => {
    createUserWithEmailAndPassword(
      auth,
      "zulfiqardev@gmail.com",
      "zulfiqar110",
    ).then((value)=> console.log(value));
  };



  return (
    <>
    <div className="App">
    <SignUp />
    <SignIn />

    </div>
    </>
  )
}

export default App
