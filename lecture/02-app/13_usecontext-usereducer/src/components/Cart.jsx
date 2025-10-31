import React, { useContext } from 'react'
import './Cart.css'
import CartItem from './CartItem'
import { CartContext } from '../App';

function Cart() {

  //장바구니 아이템 목록 (현재상태)가 아래와 같다는 가정하에 ui 확인용
  /**
    const items = [
    { id: 1, name: "상품1", price: 1200000, quantity: 1 },
    { id: 2, name: "상품2", price: 35000, quantity: 2 }
  ];
   */
  const {items, dispatch} = useContext(CartContext);

  // for문 => 나중에 reduce()로 바꾸면 더 깔끔하게 가능
  let totalQuantity = 0; //총 수량 => 각 아이템의 수량 합산
  let totalPrice = 0; //총금액 => 각 아이템의 가격**수량 합산
  for(const item of items ) { //for...of 반복문으로 각 상품을 순회
    totalQuantity += item.quantity; //수량 합산
    totalPrice += item.price * item.quantity; //(가격 × 수량) 합산
  }

  // 전체삭제 클릭했을때
  const handleClearCart = () => {
    dispatch({type: 'CREAR_CART'}) //carReducer.js참조 
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>장바구니 ({totalQuantity})</h2>
        {/* <!-- 장바구니에 담긴 아이템이 있으면 전체 삭제 버튼 표시 --> */}
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
            {/* <!-- 장바구니 아이템(CartItem)들 배치 자리 --> */}
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
            {/* 200,0000원 */} {totalPrice.toLocaleString()} 원
          </span>
        </div>
        <button className="cart-order-button">주문하기</button>
      </div>
      
    </div>//end
  )
}

export default Cart

/*
<div class="cart-container">
  <div class="cart-header">
    <h2>장바구니 (0)</h2>
    <!-- 장바구니에 담긴 아이템이 있으면 전체 삭제 버튼 표시 -->
    <button class="cart-clear-button">
      전체 삭제
    </button>
  </div>

  <!-- case1. 장바구니가 비어있을 경우 ----------->
  <p class="cart-empty">장바구니가 비어있습니다</p>
  <!-- ------------------------------------------->
  
  <!-- case2. 장바구니에 아이템이 있을 경우 ------>
  <div class="cart-items">
    <!-- 장바구니 아이템(CartItem)들 배치 자리 -->
  </div>

  <div class="cart-summary">
    <div class="cart-total">
      <span>총 금액:</span>
      <span class="cart-total-price">
        200,0000원
      </span>
    </div>
    <button class="cart-order-button">주문하기</button>
  </div>
  <!-- --------------------------------------- -->
</div>
*/