import React, { useReducer, useState } from 'react'

/*
 reducer : 업무 규칙에 따라 일처리해주는 은행 직원
 state : 현재 계좌상태 {acountId: 현재 계좌번호, balance:현재 계좌 잔액}
 action : 고객이 작성한 입금 또는 출금 요청서
 dispatch 함수 : 고객이 요청서를 작성한 후 직원을 부르는 기능
*/

// bankReducer함수 정의
function bankReducer(state, action) {
  switch (action.type) {
    case "입금":
      return { ...state, balance: state.balance + action.payload }
    case "출금":
      return  { ...state, balance: state.balance - action.payload }
    default:
      return { ...state}
  }
}

function ATM() {

  // 상태관리1 계좌정보관리 - 입금,출금 요청에 따라 잔액정보가 수정
  const [acount, dispatch] = useReducer(bankReducer, {acount: '123-456-789', balance: 10000}) // 구조분해할당

  // 상태관리2) 사용자가 입력하는 금액값 관리 - 사용자의 입력에 따라, 입금/출금 완료됐을때 초기화 
  const [amount, setAmount] = useState(0);

  return (
    <>
      <h2>현재 계좌번호 : {acount.acountId}</h2>
      <h2>현재 계좌 잔액: {acount.balance}</h2>
      <input 
        type="number" 
        placeholder='금액' 
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))} //10000이라는 문자열이 사실상 넘어가는거 Number로 숫자로 변환되게 
        />
        <br />
      <button onClick={()=> dispatch({type:'입금', payload: amount})}>입금</button>
      <button onClick={()=> dispatch({type:'출금', payload: amount})}>출금</button>
    </>
  )
}

export default ATM