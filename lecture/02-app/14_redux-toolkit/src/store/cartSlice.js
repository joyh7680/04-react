import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
  //1) 슬라이스 이름
 name: 'cart',
 //2) 초기 상태값 
 initialState: {
  items: [],
 },
 //3) 리듀서 - 함수 형태로 작성
 /*
 상태의 불변성
 새로운 상태를 알아서 만들어줌
 직접 변경하듯이 코드를 작성
 */
 reducers: {
  addToCart:(state, action) => {
    const existingItem = state.items.find((item) => item.id === action.payload.id);
    if(existingItem) { //기존의 아이템의 수량1증가
        existingItem.quantity += 1;
      }else { //장바구니 목록에 신규아이템 추가
        state.items.push({...action.payload, quantity: 1})
      }
  },
  removeFromCart:(state, action) => {
    state.items = state.items.filter((item) => item.id !== action.payload);
  },
  increaseQuantity:(state, action) => {
    const existingItem = state.items.find((item) => item.id === action.payload.id);
    existingItem.quantity  += 1;
  },
  decreaseQuantity:(state, action) => {
    const existingItem = state.items.find((item) => item.id === action.payload.id);
    if( existingItem.quantity > 1) {
       existingItem.quantity  -= 1;
    }
  },
  clearCart:(state) => {
    state.items = [];
  },
 }
})

// console.log(cartSlice)
// console.log(cartSlice.actions);

//액션 생성자 함수 (후에 컴포넌트에서 dispatch로 액션 객체 전달하는 곳에서 사용될 예정)
console.log(cartSlice.actions.addToCart()); //{ type: 'cart/addToCart', payload: undefined }

console.log(cartSlice.actions.addToCart({id:1, name:'상품명', price: 10000}));
/*
{
  type: 'cart/addToCart',
  payload: { id: 1, name: '상품명', price: 10000 }
}
  */

//export 1. 모든 액션 생성자 함수 (컴포넌트에서 dispatch하기 위해)
export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart} = cartSlice.actions

//defalut export. 전체 리듀서 함수 (스토어에 등록하기 위해)
//중앙 저장소: 스토어
export default cartSlice.reducer
/*
  1. 슬라이스
    1) 서로 관련 있는 상태(state)와 액션(action)을 하나로 묶은 조각(slice)입니다.
    2) 구성
      (1) 슬라이스 이름
        - 액션 타입의 prefix(접두어)가 됩니다. 
      (2) 초기 상태값
        - 슬라이스가 관리 하는 상태의 초기값입니다. 
        - 원시 타입(숫자, 문자열, 불리언), 객체 타입, 배열 타입, null/undefined 모두 사용할 수 있습니다. 
        - 일반적으로는 객체 타입의 사용을 권장합니다.
      (3) 리듀서
        - 리듀서 함수들을 등록하는 객체입니다. 
        - 상태 변경 함수(상태를 어떻게 변경할지 정의하는 함수)를 작성합니다. 
        - 여기에 정의하는 함수는 자동으로 액션 생성자가 됩니다. 
            키 : 함수명 (액션명 기반이 됨)
            값 : 리듀서 함수 (상태 변경 로직)
    3) createSlice() : 리덕스 툴킷에서 제공하는 액션 타입, 액션 생성자, 리듀서를 한 번에 생성하는 함수
*/