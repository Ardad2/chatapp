import {useEffect, useState, useRef } from "react"

import {initializeApp} from 'firebase';
import { getDatabase, ref, set, onValue } from 'firebase/database';

import { getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJAUAaipltiTdoIIqD2FjNO7lMWWcJFWY",
  authDomain: "chatapp-a2514.firebaseapp.com",
  databaseURL: "https://chatapp-a2514-default-rtdb.firebaseio.com",
  projectId: "chatapp-a2514",
  storageBucket: "chatapp-a2514.appspot.com",
  messagingSenderId: "603915826800",
  appId: "1:603915826800:web:04d1ec577bd7225f7c26b5"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const messagesRef = ref(database, 'messages')





function App() {
//The React Hookd

const [messages, setMessages] = useState([])
const [isSignedIn, setSignedIn] = useState(false);
const [userdata, setUserData] = useState([]);

//Set up the auth object

const auth = getAuth(app);


const signInWithGoogle = () => {
  signInWithPopup(auth, new GoogleAuthProvider())
  .then((result) => {
    const user = result.user 
    setUserData(User)
    setIsSignedIn(true)
  })
  .catch((error) => {
    console.log(error.message)
  })
}



  return (
    <div className="App">
      <h1>Chat App</h1>

      {isSignedIn && <h2> You are signed in!</h2>}
      {!isSignedIn && <h2> You are not signed in!</h2>}
      <button onClick={signInWithGoogle}>Sign in the with Google</button>
    </div>
  );
}

export default App;
