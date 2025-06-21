
import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { productActions } from './features/productSlice'
import Products from './components/Products'
import Layout from './pages/Layout'
import { BrowserRouter } from 'react-router-dom'
import { fetchApi, fetchCategores } from './app/api'
import { authObj } from './firebase/auth'
import { authActions } from './features/authSlice'

function App() {

  const dispatch = useDispatch()
  const skip = useSelector((state)=> state.product.skip)
  const catFilter = useSelector((state)=> state.product.catFilter)
  const search = useSelector((state)=> state.product.search)

  console.log(search)


  useEffect(()=>{

      let filter = catFilter ? `/category/${catFilter}` : ""
      let searching = search ?  `/search?q=${search}&` : "?"

    fetchApi(filter, skip)
         fetchApi(filter, skip, searching)
         .then((res)=>{
          dispatch(productActions.allProduct(res))
         })

  }, [skip, catFilter, search])



  useEffect(()=>{
      fetchCategores()
      .then((res)=>{
          dispatch(productActions.allCategories(res))
         })


         authObj.curUser(dispatch, authActions.login)
  }, [])


  return (
    <>
    <BrowserRouter>
         <Layout />
    </BrowserRouter>
    </>
  )
}

export default App
