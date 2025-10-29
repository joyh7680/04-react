import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  // 2) useNavigate 훅 호출 (라우팅 이동 준비)
  const navigate = useNavigate()

  // 4️) 상태 변수 생성 (useState)
                   //setInputValue() 하나만 호출해도 두 값 모두 업데이트 가능
  //기본 문법 const [state, setState] = useState(초기값);
  const [inputValue, setInputValue] = useState({
    category: '',  // category와 id를 하나의 객체로 묶으면 관리가 편함
    id: ''
  });
  // 바깥 괄호 () → useState() 함수의 소괄호 (함수 호출용)
// 안쪽 중괄호 {} → 객체 리터럴(object literal)

  // 6️) handleInputChange 함수 작성 (input 값이 바뀔 때 상태 업데이트)
  const handleInputChange = (e) => { //인자 e → 이벤트 객체 (input에서 발생한 change 이벤트 정보 포함)
    setInputValue({ //useState로 만든 상태 변수 inputValue를 업데이트
      ...inputValue,  //전개 연산자 : 기존 객체의 값들을 그대로 복사
      [e.target.id]: e.target.value  //=> "category": "it" /  "id": "2"
    })
  }

  // 7) handleClick 함수선언 (조회버튼 클릭시)
  // 조회 버튼 클릭하면 input값 받은 그대로의 새 페이지 링크가 열리게 
  const handleClick = () => { //버튼 클릭 시 navigate 호출
    navigate(`/practice/${inputValue.category}/${inputValue.id}`); //navigate와 함께 쓰면 동적 URL 이동 가능
  }

  // 1️) UI 구성과 기본 틀 만들기
  return (
    <>
      <h2>Home</h2>
      {/* 3️ 버튼 클릭 이벤트 연결-  navigate 함수 호출  */}
      <button onClick={() => navigate('/about')} >소개페이지</button>
      <button onClick={() => navigate('/profiel/1')}>1번회원의 프로필 페이지</button>

      <br />
      {/* 5️) input UI와 이벤트 연결 */}
      <div>
        <p>카테고리 : 
          <input 
            type="text"
            id='category'
            value={inputValue.category} //상태 변수와 input을 연결(value={inputValue.키})
            onChange={handleInputChange} //onChange 이벤트로 값 변경 시 상태 업데이트
            placeholder='예: it, art, history'
           />
        </p>
        <p>아이디 : 
          <input 
            type="text" 
            id='id'
            value={inputValue.id}
            onChange={handleInputChange}
            placeholder='예: 1,2,3'
          />
        </p>
      </div>

      <br />
      {/* 8) 조회버튼 이벤트핸들러 작성  */}
      <button onClick = {handleClick}>조회</button>
      
    </>
  )
}

export default Home

/*
 정리: 사고 흐름 순서 ( 리액트에서 UI + 상태 관리 + 이벤트 순으로 생각)
1.화면에 보여줄 UI 구상
페이지링크이동 버튼
2. 버튼 클릭시 페이지 이동 준비 → 상태관리 useNavigate() 호출
3. 버튼 클릭이벤트 작성 
input
4. input에서 입력받을 값 저장할 상태 변수 생성(useState)
5. input UI 구성 및 상태, 이벤트 연결 (ui)
6. input 이벤트 핸들러 함수 작성
조회버튼
7. 조회버튼 클릭시 이벤트 핸들러 함수선언
8. 조회 버튼에 이벤트 연결(ui)
*/

/*
navigate(`/practice/${inputValue.category}/${inputValue.id}`);
1.백틱(```) → 문자열 안에 변수를 삽입 가능
2.${...} → inputValue.category, inputValue.id 값을 문자열에 넣음
3.최종 문자열 → /practice/it/2 형태가 됨
4.navigate('/practice/it/2') → 해당 URL로 SPA 방식 이동
*/

/*
알고 있어야할 개념
useNavigate

<button onClick={() => navigate('/about')} 문법 
*/