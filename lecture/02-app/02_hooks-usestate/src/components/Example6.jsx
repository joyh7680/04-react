import React, { useState } from 'react'

function Example6() {

  //상태관리
  //1. 사용자 입력값
  //2. 추가 버튼 클릭시 바뀔 동물 목록데이터
  const [inputValue, setInputValue] = useState('');
  const [animals, setAnimals] = useState([]);

  //추가 버튼 클릭시 동작될 함수
  const handleAddAnimal = () => {
    //사용자 입력값 => animals 배열 추가(animals 상태변수 업데이트)

    // animals.push(inputValue) //상태변수 직접 수정 => React 변경감지x
    // setAnimals(새로운배열 === 기존배열의 요소들 유지+ 새로운값)
    setAnimals([
      ...animals, //기존 animals배열 요소 전부 (전개연산자, ES6문법 참고)
      inputValue // 새로 입력된 동물값 
    ])

    //사용자 입력값 초기화
    setInputValue('');

  }

  return (
    <>
      <h2>배열활용</h2>
      <input 
        type="text" 
        placeholder='추가할 동물 입력'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <button onClick={handleAddAnimal} >추가</button>

      <h5>현재 추가된 동물 목록</h5>
      <ul>
        {/*추가되는 동물 목록 --=> li */ }
        {
        animals.map((animal, index) => <li key={index}>{animal}</li>)
        }
      </ul>
      
    </>
  )
}

export default Example6
