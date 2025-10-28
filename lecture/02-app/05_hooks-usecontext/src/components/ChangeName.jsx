import React from 'react'

//상태 업데이트 함수, 이름 목록 데이터(names)
function ChangeName({setCurrentName, names}) {
  return (
    <>
      {/* <button>황지원</button>
      <button>제니</button>
      <button>한소희</button>
      <button>수지</button> */}
      {
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
