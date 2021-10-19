import React, { useEffect, useState } from "react";
import initializeFirebaseApp from "../../../Firebase/Firebase.init";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GithubAuthProvider,
} from "firebase/auth";

initializeFirebaseApp();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loding, setLoding] = useState(true);
  const auth = getAuth();
  // sign up with gitHub------------------
  const handleGithubLogin = () => {
    setLoding(true);
    return signInWithPopup(auth, githubProvider).catch((error) => {
      setError(error.message);
    });
  };

  //email-----------------------------------------------------

  const handleUserRegister = (email, password) => {
    setLoding(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  //-----------------------------------------------

  const handleUserLogin = (email, password) => {
    setLoding(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        const uid = user.uid;
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  //sign up  with google--------------------------------------

  const signWithGoogle = () => {
    setLoding(true);
    return (
      signInWithPopup(auth, googleProvider)
        //   .then((result) => {
        //     setUser(result.user);
        //     setError("");
        //   })
        .catch((error) => {
          const errorMessage = error.message;
        })
    );
  };

  //---------------------------------------------------------------
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoding(false);
    });
  }, []);

  //----------------------------------------------------------------

  const siginOutPage = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  return {
    loding,
    signWithGoogle,
    user,
    siginOutPage,
    handleUserRegister,
    handleUserLogin,
    handleGithubLogin,
  };
};

export default useFirebase;
