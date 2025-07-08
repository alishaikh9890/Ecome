import { use, useEffect, useRef } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "./features/productSlice";
import Products from "./components/Products";
import Layout from "./pages/Layout";
import { BrowserRouter } from "react-router-dom";
import { fetchApi, fetchCategores } from "./app/api";
import { authObj } from "./firebase/auth";
import { authActions } from "./features/authSlice";
import { dataStoreObj } from "./firebase/dataStore";
import { cartActions } from "./features/cartSlice";

function App() {
  const hasMounted = useRef(true);
  const dispatch = useDispatch();
  const skip = useSelector((state) => state.product.skip);
  const catFilter = useSelector((state) => state.product.catFilter);
  const search = useSelector((state) => state.product.search);
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth.auth);

  useEffect(() => {
    let filter = catFilter ? `/category/${catFilter}` : "";
    let searching = search ? `/search?q=${search}&` : "?";

    fetchApi(filter, skip, searching).then((res) => {
      dispatch(productActions.allProduct(res));
    });
  }, [skip, catFilter, search]);

  useEffect(() => {
    fetchCategores().then((res) => {
      dispatch(productActions.allCategories(res));
    });
    authObj.curUser(dispatch, authActions.login);
  }, []);

  useEffect(() => {
    const upCart = async () => {
      try {
        const res = await dataStoreObj.getCart(auth.uid);
        console.log(res.exists());
        if (res.exists()) {
          dispatch(cartActions.replaceCart(res.data()));
        }
      } catch (err) {
        console.error("Cart update error:", err);
      }
    };
    if (auth.uid) {
      console.log(auth.uid);
      upCart();
    }
  }, [auth]);

  useEffect(() => {
    if (hasMounted.current) {
      hasMounted.current = false;
      return; // ⛔ skip on first render
    }

    const updateCart = async () => {
      try {
        await dataStoreObj.setCart(auth.uid, cart);
      } catch (err) {
        console.error("Cart update error:", err);
      }
    };
    updateCart();
  }, [cart]);

  return (
    <>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </>
  );
}

export default App;
