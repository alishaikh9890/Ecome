
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { authObj } from '../firebase/auth';
  import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { authActions } from '../features/authSlice';

const Forms = () => {

    const [authDetails, setAuthDetails] = useState({email:"", password:""})
    const dispatch = useDispatch()
   function handleForm(e){
    const {name, value} = e.target;
        setAuthDetails({
            ...authDetails,
            [name]:value
        })
    }

   function handleLog(){
       let loginPromise = authObj.login(authDetails.email, authDetails.password)

       toast.promise(
        loginPromise,
        {
            pending:'logging in...',
            success: 'login successfull',
            error: 'login failed...'
        }
       )

        loginPromise.then((res)=>{
            console.log(res)
             dispatch(authActions.authPopClose())
            toast.success("Login successfull...!", {autoClose: 2500})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    function handleGoogleLogin(){
        authObj.googleAuth()
        .then((res) => {
            // console.log(res)
             dispatch(authActions.authPopClose())
            toast.success("Login successfull...!", {autoClose: 2500})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
          <div>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control  type="email" name="email" onChange={handleForm} placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control  type="password" name="password" onChange={handleForm} placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <button onClick={handleLog} className="btn btn-sm btn-success" >Submit</button>
            </Form.Group>
            <div className='d-flex gap-3 justify-content-center'>
                <button onClick={handleGoogleLogin} className='btn rounded-circle shadow p-1'>
                    <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" style={{width:"35px", height:"35px"}} alt="" />
                </button>
                <button className='btn rounded-circle shadow p-1'>
                    <img src="https://cdn-icons-png.flaticon.com/128/25/25231.png" style={{width:"35px", height:"35px"}} alt="" />
                </button>
                <button className='btn rounded-circle shadow p-1'>
                    <img src="https://cdn-icons-png.flaticon.com/128/145/145802.png" style={{width:"35px", height:"35px"}} alt="" />
                </button>
            </div>
        </div>
    );
}

export default Forms;
