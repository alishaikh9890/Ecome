import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CartPop = () => {

        const cartData = useSelector((state)=>state.cart)

  return (
    cartData.cartLength && <div className='position-fixed bottom-0 start-50 translate-middle '>
   <div className='bounceIn p-2 rounded-3 bg-success bg-gradient shadow d-flex align-items-center gap-2'>
         <i className="bi bi-cart4 text-white fs-4"></i>
        <span className='badge text-bg-light'>{cartData.cartLength} Items</span>
        <span className='badge text-bg-light'>₹ {cartData.total}</span>
        <Link className='text-decoration-none progress' style={{width:"100px",height:"30px"}} to='/cart'>
        <div className='progress-bar progress-bar-striped progress-bar-animated w-100 bg-success'>
        <span className='fs-6'>
        View Cart <i className="bi bi-arrow-right-circle "></i>
        </span>
        </div>
        </Link>
   </div>
    </div>
  )
}

export default CartPop