import Dropdown from "react-bootstrap/Dropdown";
import Popup from "./Popup";
import { useDispatch, useSelector } from "react-redux";
import { authObj } from "../firebase/auth";
import { authActions } from "../features/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Protector from "./Protector";
import { cartActions } from "../features/cartSlice";

function UserProfile() {
  const userAuth = useSelector((state) => state.auth.auth);
   let wishList = useSelector((state) => state.cart.wishList)
  const dispatch = useDispatch();

  const navigate = useNavigate()

  function handleLogout() {
    authObj
      .logout()
      .then(() => {
        toast.error("User Logged Out...!", { autoClose: 1000 });
        dispatch(authActions.logout());
        dispatch(cartActions.resetCart());
        navigate('/')
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
            style={{ width: "30px", height: "30px", padding: "2px" }}
          />
        ) : userAuth.username ? (
          <b
            className="rounded-circle"
            style={{ width: "30px", height: "30px" }}
          >
            {userAuth.username[0].toUpperCase()}
          </b>
        ) : (
          <i className="bi bi-person-circle rounded-circle fs-5 ms-1"></i>
        )}
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ width: "fit-content" }}>
        <Dropdown.Item>{userAuth.username && userAuth.username}</Dropdown.Item>
        <Dropdown.Item>{userAuth.email && userAuth.email}</Dropdown.Item>
        <Protector>
        <Dropdown.Item>
          <i className="bi bi-gear"></i>
          <span className="small text-secondary ms-2">Settings</span>
        </Dropdown.Item>
        <Dropdown.Item>
          <i className="bi bi-bell"></i>
          <span className="small text-secondary ms-2">Notifications</span>
        </Dropdown.Item>
        <Dropdown.Item as="div">
          <Link
            className="text-decoration-none d-flex align-items-center text-secondary"
            to="/wishlist"
          >
            <i className="bi bi-heart"></i>
            <span className="small text-secondary ms-2">Wishlist</span>
            <span className="badge text-bg-secondary p-1 ms-5">{wishList.length}</span>
          </Link>
        </Dropdown.Item>
        <Dropdown.Item as="div">
        <Link
        className="text-decoration-none d-flex text-secondary"
        to="/profile"
        >
        <i className="bi bi-person"></i>
        <span className="small text-secondary ms-2">View Profile</span>
        </Link>
        </Dropdown.Item>
        </Protector>
        <Dropdown.Item>
          {!userAuth.email ? (
              <button onClick={()=>dispatch(authActions.authPopOpen())} className="btn btn-sm btn-success">Login</button>
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
