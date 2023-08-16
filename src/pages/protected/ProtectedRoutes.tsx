import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';


interface protectedRoutesProps {
    isAuthenticated: boolean;
}

const ProtectedRoutes: React.FC<protectedRoutesProps> = ({isAuthenticated}) => {

  if (isAuthenticated){
    return (
      <>
        <Navigate to="/chat" replace />
        <Outlet /> 
      </> 
    )
  }
  
  return  <Navigate to="auth/sign-in" replace/>
}

export default ProtectedRoutes