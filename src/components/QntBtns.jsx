import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../features/cartSlice'
import { authActions } from '../features/authSlice'

function QntBtns({ele}) {
  let cart = useSelector((state) => state.cart.cart)
  const user = useSelector((state)=> state.auth.auth)
  const dispatch = useDispatch()

  function findQtn(){
   let newCartItem = cart.find((el) => el.id == ele.id)

   if(newCartItem)
   return newCartItem.count
  }

  function handleAdd(){
    if(!user.uid){
      dispatch(authActions.authPopOpen())
    }else{
      dispatch(cartActions.addToCard(ele))
    }
  }

   return (

      findQtn() ?
      <ButtonGroup aria-label="Basic example">
        <Button onClick={() => dispatch(cartActions.addToCard(ele))}  size="sm" variant="success">+</Button>
        <Button size="sm" disabled className='text-black' variant="light">{findQtn()}</Button>
        <Button onClick={() => dispatch(cartActions.decCount(ele))} size="sm" variant="danger">-</Button>
      </ButtonGroup>
      :
       <Button onClick={handleAdd} variant="warning" size="sm">Add</Button>
  )
}

export default QntBtns