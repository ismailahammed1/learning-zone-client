// @ts-nocheck
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {
  //------------api key
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(
      "https://b610-lerning-platform-server-side-ismailahammed1.vercel.app/language"
    )
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  //---google login---
  const googleProvider = new GoogleAuthProvider();
  //---github login---
  const githubProvider = new GithubAuthProvider();

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  //1. Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   2. Update Name

  const updateName = (name) => {
    setLoading(true);
    return updateProfile(auth.currentUser, { displayName: name });
  };

  //   3. Email Verify
  const verifyEmail = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };

  // 4. Google Signin

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // 4. Github Signin

  const signInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // 5. Logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  //6. Login with Password
  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //7. Forget Password
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    //this part will execute once the component is mounted.
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      //this part will execute once the component is unmounted.
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    updateName,
    verifyEmail,
    signInWithGoogle,
    signInWithGithub,
    logout,
    signin,
    resetPassword,
    loading,
    categories,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
