import React, { useContext } from 'react'
import './Cart.css'
import CartItem from './CartItem'
import { CartContext } from '../App';

function Cart() {

  const {items, dispatch} = useContext(CartContext);

  let totalQuantity = 0; 
  let totalPrice = 0; 
  for(const item of items ) { 
    totalQuantity += item.quantity; 
    totalPrice += item.price * item.quantity; 
  }

  const handleClearCart = () => {
    dispatch({type: 'CREAR_CART'}) 
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>장바구니 ({totalQuantity})</h2>
        {items.length > 0 && (
            <button className="cart-clear-button" onClick={handleClearCart} >
              전체 삭제
            </button>
          )}
      </div>

      {
        items.length === 0? ( // case1. 장바구니가 비어있을 경우
          <p className="cart-empty">장바구니가 비어있습니다</p>
        ):( //case2. 장바구니에 아이템이 있을 경우
          <div className="cart-items"> 
            {
              items.map((item) => <CartItem key={item.id} item={item} /> )
            }
          </div>
        )
      }

      <div className="cart-summary">
        <div className="cart-total">
          <span>총 금액:</span>
          <span className="cart-total-price">
           {totalPrice.toLocaleString()} 원
          </span>
        </div>
        <button className="cart-order-button">주문하기</button>
      </div>
      
    </div>//end
  )
}

export default Cart
