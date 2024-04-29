import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRout = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();

  if(loading){
    return <div className='flex min-h-[80vh] justify-center items-center'>
      <p>Loading</p>
    </div>
  }

  if(user){
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>
}

PrivateRout.propTypes={
  children: PropTypes.node
}
export default PrivateRout;