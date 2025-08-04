import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {

const user = useSelector((state)=>state.auth.auth)

  return (
    <div className='container'>
        <table className='table border'>
            <tr>
                <td>
                    <img src={user.photo} className='img-thumbnail rounded-circle' alt=""
 />
                </td>
                <td>
                    <b>{user.username}</b>
                </td>
            </tr>
            <tr>
                <td>Email :</td>
                <td>{user.email}</td>
            </tr>
            <tr>
                <td>Phone :</td>
                <td>one</td>
            </tr>
            <tr>
                <td>1</td>
                <td>one</td>
            </tr>
        </table>
    </div>
  )
}

export default Profile