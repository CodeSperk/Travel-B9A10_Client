import PropTypes from 'prop-types';
import { getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../firebase/firebase.config";

const AuthContext = createContext(null);
const auth =  getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
 
  const authInfo = {
    user
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