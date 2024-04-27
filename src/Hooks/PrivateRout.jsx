import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";

const PrivateRout = ({children}) => {
  const {user} = useContext(AuthContext);

  if(user){
    return children;
  }

  return <Navigate to="/login"></Navigate>
}

PrivateRout.propTypes={
  children: PropTypes.node
}
export default PrivateRout;