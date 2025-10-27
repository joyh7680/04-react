import React, { useReducer } from 'react'
import countReducer from '../reducers/countReducer'


 // state=현재상태값, action={type:"요청관련타입" , payload:요청 처리시 필요한 데이터}
  // return 새로운상태값 
  //switch 조건처리 - 통상적으로 많이쓰임, 동등비교
  //한꺼번에 관리를 하는거

  //상태 변경 로직을 컴포넌트 외부 함수(reducer)로 관리
// 2.  state를 특정 액션에 따라 관리
  /*
function countReducer(state, action){
  switch(action.type) {
    case "INCREASE": 
      return state + 1;
    case "DECREASE":
      return state -1;
    case  "RESET":
      return state;
    case  "ADD":
      return state + action.playload;
    case  "MINUS":
      return state - action.playload;
    default:
      return state;
  }
}   외부문서로 분리시키기 
  */  


function AfterReducer() {

  //3 hook작성
  const [count, dispatch] = useReducer(countReducer , 0) 
  // [0, function ] => 0 은 초기 state값, f : 배열로 무언가가 담긴채로 반환됌

  //1 화면 표시
  return (
    <>
    <h2>카운터 : {count} </h2>
    {/* 4. 이벤트 핸들러 함수 작성 */}
    <button onClick={() => dispatch({type: 'INCREASE'})} >+ 1 증가</button>
    <button onClick={() => dispatch({type: 'DECREASE'})} >- 1 감소</button>

    <button onClick={() => dispatch({type: 'RESET'})} >초기화</button>
    <button onClick={() => dispatch({type: 'ADD', payload: 5})} >+ 5 증가</button>
    <button onClick={() => dispatch({type: 'ADD', payload: 10})} >+ 10 증가</button>
    <button onClick={() => dispatch({type: 'MINUS', payload: 10})} >- 10 감소</button>
    </>
  )
}

export default AfterReducer
