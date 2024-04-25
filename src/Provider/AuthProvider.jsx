import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth =  getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);


  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const googleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  }

  const githubLogin = () => {
    const gitProvider = new GithubAuthProvider();
    return signInWithPopup(auth, gitProvider);
  }
 
  const authInfo = {
    user,
    createUser,
    loginUser,
    googleLogin,
    githubLogin
  }

  return(
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
};

AuthProvider.propTypes = {
  children: PropTypes.node
}

export default AuthProvider;