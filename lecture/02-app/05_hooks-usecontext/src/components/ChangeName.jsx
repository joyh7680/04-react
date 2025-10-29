import React from 'react'

//상태 업데이트 함수, 이름 목록 데이터(names), 함수형 컴포넌트를 선언
                    //props 구조분해 문법
// 부모 컴포넌트(NameShareApp)에서 아래처럼 넘겨준 데이터를 받는 거
//  <ChangeName setCurrentName={setCurrentName} names={names} />
function ChangeName({setCurrentName, names}) {
  return (
    <>
      {/* <button>황지원</button>
      <button>제니</button>
      <button>한소희</button>
      <button>수지</button> */}
      {
        //names 배열을 순회하면서 각각의 이름에 대해 <button>을 하나씩 만들어주는 구문.
        // map() 함수는 배열의 각 요소를 변환해 새로운 배열을 반환
        names.map((name, index)=>( 
          <button 
          key={index} 
          onClick={()=> setCurrentName(name)} //name값 전달받아서 상태변경이 진행이 되게끔
          >{name}</button>
        ))
      }
    </>
  )
}

export default ChangeName

/*key={index}

React에서 배열을 .map()으로 렌더링할 때
각 항목을 구분하기 위해 고유한 key값을 지정해야 함.

여기서는 단순히 index(0,1,2,3)를 key로 사용함.*/