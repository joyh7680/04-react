import React from 'react'
import DisplayName2 from './DisplayName2';
import { useState } from 'react';
import ChangeName2 from './ChangeName2';
import { createContext } from 'react';

//createContext 리액트 제공 메서드 
export const NameContext = createContext();

function NameShareApp2() {

  const names =['황지원', '제니', '한소희', '수지']
  const [currentName, setCurrentName] = useState('황지원');

  return (
    <>
      <h1>이름 공유 앱</h1>

      {/* 하위 컴포넌트에서는 가장 가까운 상위 트리의 Provide에서 제공하는 값을 사용할 수 있음  */}
      <NameContext.Provider value={{
        // names: names,
        // currentName : currentName,
        // setCurrentName: setCurrentName
        names, currentName, setCurrentName //3줄 작성 단축구문
      }}>
        <DisplayName2 />
        <ChangeName2 />
      </NameContext.Provider>
    </>
  )
}

export default NameShareApp2

/*
<DisplayName2  currentName = {currentName}/>
 ->  <DisplayName2 />
<ChangeName2 setCurrentName = {setCurrentName} names={names} />
 -> <ChangeName2 />
*/