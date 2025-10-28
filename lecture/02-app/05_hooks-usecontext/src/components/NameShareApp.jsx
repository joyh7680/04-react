import React from 'react'
import DisplayName from './DisplayName'
import ChangeName from './ChangeName'
import { useState } from 'react'

function NameShareApp() {

  const names =['황지원', '제니', '한소희', '수지']
  const [currentName, setCurrentName] = useState('황지원');

  return (
    <>
      <h1>이름 공유 앱</h1>

      {/* 현재 선택된 이름이 display 되는 컴포넌트  */}
      <DisplayName  currentName = {currentName}/>

      {/* 현재 선택되는 이름을 변경시켜주는 버튼 목록 컴포넌트  */}
      <ChangeName setCurrentName = {setCurrentName} names={names} />
      
    </>
  )
}

export default NameShareApp

/*
컴포넌트 리렌더링
*/

/*
부모컴포넌트작성
자식 컴포넌트들 작성
어느 위치에 선언할지 정확히 인지
부모에서 선언하고 자식에게 물려줌
props전달 부모에서만 가능
*/