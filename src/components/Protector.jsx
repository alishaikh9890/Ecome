import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../features/authSlice'
import { useNavigate } from 'react-router-dom'

const Protector = ({children}) => {
const user = useSelector((state)=> state.auth.auth)
const dispatch = useDispatch()
const navigate = useNavigate()
useEffect(()=>{
    if(!user.uid){
        // dispatch(authActions.authPopOpen())
        navigate("/")
    }
},[user, navigate])

if(!user.uid){
    return null;
}

return (<>{children}</>)

}

export default Protector