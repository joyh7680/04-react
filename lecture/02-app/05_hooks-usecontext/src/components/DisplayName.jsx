import React from 'react'

//상태변수 (현재 선택된 이름)
//함수형 컴포넌트를 선언
                     //({ currentName })  props를 구조분해(destructuring) 해서 받는 문법
                    //  부모 컴포넌트가 <DisplayName currentName={currentName} />
// 이렇게 보낸 데이터를 currentName이라는 이름으로 바로 꺼내 쓰는 거야.
function DisplayName({currentName}) {
  return (
    <>
     <h2>현재 선택된 이름: {currentName}</h2> 
    </>
  )
}

export default DisplayName
