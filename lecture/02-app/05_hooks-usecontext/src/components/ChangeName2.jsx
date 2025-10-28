import React from 'react'
import { useContext } from 'react'
import { NameContext } from './NameShareApp2'

//상태 업데이트 함수, 이름 목록 데이터(names)
function ChangeName2() {

  const {names, setCurrentName} = useContext(NameContext)// {names : [], currentName: xxx, setCurrentName: xxx}

  return (
    <>
      {
        names.map((name, index)=>(
          <button 
          key={index} 
          onClick={()=> setCurrentName(name)} 
          >{name}</button>
        ))
      }
    </>
  )
}

export default ChangeName2
