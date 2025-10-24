import React from 'react'

//Example2라는 React 함수형 컴포넌트를 정의
function Example2() {

  // const [상태변수, 상태업데이트 함수] = React.useState(초기값)
  //setIsCheckd 무조건 set앞에 붙여서 이름 지음
  //false -> 삼항연산자 활용
  // onChange={(e) => 이벤트핸들러
        //[현재 체크박스 상태 (true false)]                                  //상태(state)를 선언
  const [isChecked, setIsCheckd] = React.useState(false)

  return (
    <>
     <h2>체크박스와 state</h2>
     <input 
      type="checkbox" 
      id='chk' 
      checked={isChecked} 
      onChange={(e) => setIsCheckd(e.target.checked)}
     />
     <label htmlFor="chk">체크박스</label>
     <h5>체크여부 : {isChecked ? "check yes": "check no"}</h5>
    </>
  )
}

export default Example2
