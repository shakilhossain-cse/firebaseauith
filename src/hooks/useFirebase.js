import { useState,useEffect } from 'react'
import initfirebaseApp from '../firebase/firebase.init'
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged ,signOut, GithubAuthProvider  } from "firebase/auth";


initfirebaseApp()
const useFirebase = () => {
  const [User, setUser] = useState({});
  const [Error, setError] = useState('');

  const auth = getAuth();


  const signInUsingGoogle = () => {

    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      setUser(user);
    }).catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage);
    });
  }

  const signInUsingGithub = () => {
    const githubProvider = new GithubAuthProvider();

    signInWithPopup(auth, githubProvider)
    .then((result) => {
      const user = result.user;
      setUser(user);
    }).catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage);
    });
  }
  
  const logout = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
       setUser({})
      }
    });
  }, [])

  return {signInUsingGoogle,User,Error,logout,signInUsingGithub}
}

export default useFirebase;
