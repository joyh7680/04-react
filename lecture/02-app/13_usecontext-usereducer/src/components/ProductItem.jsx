import React, { useContext } from 'react'
import './ProductItem.css'
import { CartContext } from '../App'

//<ProductItem product = {상품객체 } > 
function ProductItem({product}) { //product === { "id": xx, "name": "xxx", "price":  xxx,"description": "xxx"}

  // 2) 장바구니에 추가 기능
  const {dispatch} = useContext(CartContext) // {items: [], dispatch: f}

  const handleAddtoCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id:product.id,
        name: product.name,
        price: product.price
      }
    })
  }

  return (
    <div className="product-item">
      {/* 1) ui 구성  */}
      <h3 className="product-title">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">{product.price.toLocaleString()}원</p>

      <button className="product-add-button" onClick={handleAddtoCart} >
        장바구니에 추가
      </button>
    </div>
  )
}

export default ProductItem

/*
 <div className="product-item">
  <h3 className="product-title">상품명</h3>
  <p className="product-description">상품 간단 설명</p>
  <p className="product-price">10,000원</p>
  <button className="product-add-button">
    장바구니에 추가
  </button>
</div>
*/