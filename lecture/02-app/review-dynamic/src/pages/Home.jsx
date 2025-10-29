import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Home() {

  // 링크이동 버튼 클릭시 => nav 함수 호출 
  const navigate = useNavigate();

  //input 상태관리값 필요
  const [inputValue, setInputValue] = useState({
    category : '',
    id: ''
  })

  //input 값 입력되었을때 이벤트 필요
  const inputChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.id]: e.target.value
    })
  }

  // 조회버튼 클릭이벤트 함수 필요
  // 업뎃된 카테 필요, 업뎃된 아이디필요
  // 조회버튼 클릭시 입력된 input값으로 해당 페이지로 링크가 이동되게 
  const  eventCheck = ( )=> {
    navigate(`/practice/${inputValue.category}/${inputValue.id}`)
  }

  return (
    <>
      <h2>Home</h2>
      {/* <button onClick={navigate} >소개페이지</button >
      <button onClick={navigate}>1 member profile page</button> */}
      <button onClick={() => navigate('/about')} >소개페이지</button>
      <button onClick={() => navigate('/profile/1')} >1 member profile page</button>
      <br />
      <p>
        카테고리 :
        <input 
          type="text" 
          id='category'
          value={inputValue.category} 
          onChange={inputChange}
          placeholder='it'
          />
      </p>
      <p>
        아이디 :
        <input 
          type="text" 
          id='id'
          value={inputValue.id}
          onChange={inputChange}
          placeholder='it'
          />
      </p>
      <br />
      <button onClick={eventCheck} >조회</button>
      
    </>
  )
}

export default Home
