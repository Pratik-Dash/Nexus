import React from 'react'
import { useData } from '../Context/DataContext'
import { Navigate, useLocation } from 'react-router-dom'


const RequireAuth = ({children}) => {
    const auth = useData()
    const location = useLocation()
    if(!auth.user){
        return <Navigate to = "/sign-in" state = {{path:location.pathname}}/>
    }
  return children
}

export default RequireAuth
