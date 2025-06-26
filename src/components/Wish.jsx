import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../features/cartSlice'

function Wish({ele}) {

    const dispatch = useDispatch()
    const wishList = useSelector((state) => state.cart.wishList)

    function findWish(id){
        return wishList.some((el) => el.id == id)
    }

  return (
     <i
        onClick={() => dispatch(cartActions.addToWishList(ele))}
        className={findWish(ele.id) ? `bi bi-heart-fill position-absolute text-danger` : `bi bi-heart position-absolute text-secondary` }
        onMouseEnter={(e) => e.currentTarget.classList.replace("bi-heart", "bi-heart-fill")}
        onMouseLeave={(e) => !findWish(ele.id) && e.currentTarget.classList.replace("bi-heart-fill", "bi-heart")}
        style={{ right: "13px", top: "10px" }}
      ></i>
  )
}

export default Wish