import React from 'react'
import { useContext } from 'react'
import { NameContext } from './NameShareApp2'

function DisplayName2() {

  //useContext(NameContext) 하위 컴포넌트들은 useContext(NameContext)로 이 데이터를 받아서 사용 가능

  //NameContext 객체를 구독해서 해당 컨텍스트에 저장된 내용을 꺼내서 사용
  const {currentName} =  useContext(NameContext) // {names : [], currentName: xxx, setCurrentName: xxx}

  return (
    <>
     <h2>현재 선택된 이름: {currentName}</h2> 
    </>
  )
}

export default DisplayName2
