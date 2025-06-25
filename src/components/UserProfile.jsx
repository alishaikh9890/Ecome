import Dropdown from 'react-bootstrap/Dropdown';
import Popup from './Popup';
import { useDispatch, useSelector } from 'react-redux';
import { authObj } from '../firebase/auth';
import { authActions } from '../features/authSlice';


function UserProfile() {

    const userAuth = useSelector((state) => state.auth.auth)
    const dispatch = useDispatch()

  function handleLogout(){
    authObj.logout()
    .then((res)=>{
        dispatch(authActions.logout())
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  console.log(userAuth.photo)
    



  return (
    <Dropdown>
      <Dropdown.Toggle className='rounded-pill p-1' variant="outlined-light" id="dropdown-basic">
      {
        userAuth.photo ?
         <img  src={userAuth.photo}  className='rounded-circle me-2 img-thumbnail' style={{width:"30px", height:"30px"}} />
      : userAuth.username ?
         <b className='rounded-circle me-2' style={{width:"30px", height:"30px"}} >{userAuth.username[0].toUpperCase()}</b>
        :
         <img  src=''  className='rounded-circle me-2' style={{width:"30px", height:"30px"}} />
      } 
      </Dropdown.Toggle>

      <Dropdown.Menu className='end-0'>
        <Dropdown.Item >
            {userAuth.username && <b>{userAuth.username}</b>}
            </Dropdown.Item>
        <Dropdown.Item >
            {userAuth.email && <b>{userAuth.email}</b>}
            </Dropdown.Item>
        <Dropdown.Item >
            {
                !userAuth.email ? <Popup /> :  <button onClick={handleLogout} className="btn btn-sm btn-danger">Logout</button>
            }
            
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default UserProfile;