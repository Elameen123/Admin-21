import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const userAuth = () => {
  let adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"))
  return adminDetails
}
const ProtectedRoutes = () => {
  const isAuth = userAuth()
  
  return  isAuth ? <Outlet /> : <Navigate to='/' />
  
}

export default ProtectedRoutes