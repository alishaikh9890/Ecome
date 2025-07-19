import Dropdown from "react-bootstrap/Dropdown";
import Popup from "./Popup";
import { useDispatch, useSelector } from "react-redux";
import { authObj } from "../firebase/auth";
import { authActions } from "../features/authSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function UserProfile() {
  const userAuth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();

  function handleLogout() {
    authObj
      .logout()
      .then(() => {
        toast.error("User Logged Out...!")
        dispatch(authActions.logout());
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Dropdown drop="down">
      <Dropdown.Toggle
        caret="false"
        className="btn btn-sm btn-outline-secondary p-0 pe-1"
        variant="outlined-secondary"
        size="sm"
        id="dropdown-basic"
      >
        {userAuth.photo ? (
          <img
            src={userAuth.photo}
            className="rounded-circle me-0 img-thumbnail"
            style={{ width: "30px", height: "30px",padding:"2px" }}
          />
        ) : userAuth.username ? (
          <b
            className="rounded-circle"
            style={{ width: "30px", height: "30px" }}
          >
            {userAuth.username[0].toUpperCase()}
          </b>
        ) : (
          <i className="bi bi-person-circle border p-1 rounded-circle fs-5"></i>
        )}
      </Dropdown.Toggle>

      <Dropdown.Menu style={{width:"fit-content"}}>
        <Dropdown.Item>{userAuth.username && userAuth.username}</Dropdown.Item>
        <Dropdown.Item>{userAuth.email && userAuth.email}</Dropdown.Item>
        <Dropdown.Item>
          <i className="bi bi-gear"></i>
          <span className="small text-secondary ms-2">Settings</span>
        </Dropdown.Item>
        <Dropdown.Item>
          <i className="bi bi-bell"></i>
          <span className="small text-secondary ms-2">Notifications</span>
        </Dropdown.Item>
        <Dropdown.Item>
        <Link to="/wishlist">
            <i className="bi bi-heart"></i>
            <span className="small text-secondary ms-2">Wishlist</span>
            </Link>
          </Dropdown.Item>
        <Dropdown.Item>
          {!userAuth.email ? (
            <Popup />
          ) : (
            <button onClick={handleLogout} className="btn btn-sm btn-danger">
              Logout
            </button>
          )}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default UserProfile;
