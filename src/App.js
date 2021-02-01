import axios from "axios";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";
import "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";

if (firebase.apps.length === 0) {
  firebase.initializeApp({
    apiKey: "AIzaSyCN4QTl2WYLdL_72gBqiBKomMvHex7LvX4",
    authDomain: "pmsox-92af4.firebaseapp.com",
    projectId: "pmsox-92af4",
    storageBucket: "pmsox-92af4.appspot.com",
    messagingSenderId: "48250995696",
    appId: "1:48250995696:web:96b70bf947f3418fc29335",
    measurementId: "G-DJZJL120JK",
  });
}
const auth = firebase.auth();
// const firestore = firebase.firestore();
// const analytics = firebase.analytics();

function App() {
  const [user] = useAuthState(auth);

  let fullMessage;
  const sendMessage = () => {
    // this is the right way to trigger a callable cloud function
    var addMessage = firebase.functions().httpsCallable("addMessage");

    addMessage("whats up").then((result) => {
      fullMessage = result.data;
      console.log(fullMessage);
    });
  };

  return (
    <div className="App">
      {user && <h1>Welcome to PMSox {auth.currentUser.displayName}!</h1>}
      {user && <img src={auth.currentUser.photoURL} alt="Italian Trulli"></img>}

      {!user && <h1>Please sign into the pmsox app</h1>}
      <SignOut />
      <SignIn />

      <br />
      <button onClick={sendMessage}>Trigger sendMessage cloud func</button>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    !auth.currentUser && (
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    )
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

export default App;
