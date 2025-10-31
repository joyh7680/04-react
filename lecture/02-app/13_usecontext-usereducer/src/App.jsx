
import './App.css'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import { createContext, useReducer } from 'react'
import { carReducer, initialState } from './reducers/carReducer'

//4
export const CartContext = createContext();

function App() {

  // 3 useReducer(리듀서함수, 상태초기값)
  const [state, dispatch] = useReducer(carReducer, initialState)

  return (
    //5 CartContext.Provider
    <CartContext.Provider value={{items: state.items, dispatch: dispatch}}>
      <div className="app-container">
        {/* <!-- 1 상품 목록 컴포넌트 --> */}
        <ProductList />
        {/* <!-- 2 장바구니 컴포넌트 --> */}
        <Cart />
      </div>
    </CartContext.Provider>
  )
}

export default App
