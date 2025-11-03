import React, { useContext } from 'react'
import './CartItem.css'
// import { CartContext } from '../App'
import {useDispatch} from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../store/cartSlice'

function CartItem({item}) { 

  // const {dispatch} = useContext(CartContext);
  const dispatch =  useDispatch()

  const handleItemRemove = () => {
    // dispatch({type: 'REMOVE_FROM_CART', payload: item.id })
    dispatch(removeFromCart(item.id))
  }

  const handleItemQuantityInCrease = () =>{
    // dispatch({type: 'INCREASE_QUANTITY', payload: item.id })
    dispatch(increaseQuantity(item.id))
  }

  const handleItemQuantityDecrease = () => {
    // dispatch({type: 'DECREASE_QUANTITY', payload: item.id })
     dispatch(decreaseQuantity(item.id))

  }

  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h4>{item.name}</h4>
        <p className="cart-item-price">{item.price.toLocaleString()}원</p>
      </div>
      
      <div className="cart-item-controls">
        <button className="cart-item-quantity-button" onClick={handleItemQuantityDecrease} >
          -
        </button>
        <span className="cart-item-quantity">{item.quantity}</span>
        <button className="cart-item-quantity-button" onClick={handleItemQuantityInCrease} >
          +
        </button>
        <button className="cart-item-remove-button" onClick={handleItemRemove} >
          삭제
        </button>
      </div>
    </div>
  )
}

export default CartItem
