import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../features/cartSlice'

function QntBtns({ele}) {
  let cart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch()

  function findQtn(){
   let newCartItem = cart.find((el) => el.id == ele.id)
   if(newCartItem)
   return newCartItem.count
  }

   return (

      findQtn() ?
      <ButtonGroup aria-label="Basic example">
        <Button onClick={() => dispatch(cartActions.addToCard(ele))}  size="sm" variant="success">+</Button>
        <Button size="sm" disabled className='text-black' variant="light">{findQtn()}</Button>
        <Button onClick={() => dispatch(cartActions.decCount(ele))} size="sm" variant="danger">-</Button>
      </ButtonGroup>
      :
       <Button onClick={() => dispatch(cartActions.addToCard(ele)) } variant="warning" size="sm">Add</Button>
  )
}

export default QntBtns