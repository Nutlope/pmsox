import firebase from "firebase/app";
import constants from "./firebase_keys.js";
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";
import "firebase/analytics";
import GoogleButton from "react-google-button";

import { useAuthState } from "react-firebase-hooks/auth";

if (firebase.apps.length === 0) {
  firebase.initializeApp(constants);
}
const auth = firebase.auth();
// const firestore = firebase.firestore();
// const analytics = firebase.analytics();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {user && <h1>Welcome to PMSox!</h1>}
      {user && <img src={auth.currentUser.photoURL} alt="Photo"></img>}
      {user && <h3>Logged in as: {auth.currentUser.displayName}</h3>}
      {!user && <h1>Please sign into the pmsox app</h1>}
      <SignOut />
      <SignIn />
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return !auth.currentUser && <GoogleButton onClick={signInWithGoogle} />;
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
