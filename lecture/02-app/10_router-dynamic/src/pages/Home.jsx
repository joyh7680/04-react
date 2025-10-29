import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

  /* 3 useNavigate hook (react-router-dom 제공) }
      hook 이용, import 
    useNavigate(), 변수설정 // f (다른 경로로 이동할 수 있는 기능)*/
   const navigate = useNavigate() // f (다른 경로로 이동할 수 있는 기능)

    //  5-2 하나의 상태변수로. usestate객체구성 
    const [inputValue, setInputValue] = useState({
      category: '',
      id: ''
    });

    // 5-4 
    const handleInputChange = (e) => {
      setInputValue({
        ...inputValue, //전개연산자 이용
        [e.target.id]: e.target.value
      })
    }

    // 5-6 조회버튼 클릭시 동작시킬 함수 (/practice/:category/:id 참고)
    const handleClick = () => {
      navigate(`/practice/${category}/${id}`);
    }

  return (
    <div>
      <h5>Home</h5>
      {/* 다른페이지 이동 방식이 링크 형식이 아닌 버튼이나 일반 요소 일경우 */}
      {/* 1. ui 구성 button 만들어주기  */}
      {/* 2. 이벤트핸들러 작성  */}
      {/* js) location.href= "요청할url" == <a> (서버사이드, 깜빡거림 문제발생)*/}
      <button onClick={() => location.href='a/bout'}>소개페이지</button>

      {/* 4 navigate 함수 호출  */}
      <button onClick={() => navigate('/profile/1')}>1번 회원의 프로필 페이지</button>
        <br />
        <br />

      {/* 5-1다른 형식  */}
      <div>
        {/* 5-3)  */}
        카테고리 : 
        <input 
          type='text'
          id='category'
          value={inputValue.category}
          onChange={handleInputChange} //5-5 이벤트핸들러 동작
          placeholder='예: it, art, history'
        />
        <br />

        아이디  :
         <input 
          type='text'
          id='id'
          value={inputValue.id}
          onChange={handleInputChange}
          placeholder='예: 1'
        />
        <br />
        {/* 조회버튼 클릭시 practice 페이지 보여지도록  */}
        {/* 5-7 이벤트핸들러 동작  */}
        <button onClick={handleClick}>조회</button>

      </div>
    </div>
  )
}

export default Home

/* 
1. ui 구성 button 만들어주기 
 2. 이벤트핸들러 작성
3 useNavigate hook
4 navigate 함수 호출
 */