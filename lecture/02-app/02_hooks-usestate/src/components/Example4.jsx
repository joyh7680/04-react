import React, { useState } from 'react'

function Example4() {

  //개별적으로 id , pw useState 관리 
  // useState('') : 초기값 빈 문자열로 setting
  const [userId, setUserId] = useState('')
  const [userPwd, setUserPwd] = useState('')

  //id
  //handleUserIdChange   id가 바뀔때 이벤트핸들러 함수 정의
  // (e) 이벤트 객체 받을거 
  const handleUserIdChange = (e) => {
    //setUserId 함수 호출
    //이벤트 객체에 접근->value에 접근 
    setUserId(e.target.value)
  }

  //pwd
   const handleUserPwdChange = (e) => {
    setUserPwd(e.target.value)
  }

  //로그인버튼 클릭시에 생성될 이벤트핸들러 작성
  const handleLoginSubmit = (e) => {
    //사용자 입력값 가져와서 유효성체크
    // 유효한 값이 아니면 제출 막기 (기본 이벤트 막기)
    //유효한 값이면 알람창으로 사용자 입력값 출력

    // if(아이디값이 누락되어있거나 비번값이 누락되어있을 경우){}
    //trim() : 공백제거
    // if(userId.trim() === "" || userPwd.trim() === ""){
      
    // }

    //줄여쓰기 !
    
    //!userId !userPwd ! 두번 들어가야함
      if (!userId.trim() || !userPwd.trim()) {
        e.preventDefault();
        alert('입력값이 누락되었습니다.');
        return;
      }

      //사용자 입력값 확인
      alert(`유효성검사 통과! 로그인 제출 진행됩니다. 
        아이디: ${userId}, 비번: ${userPwd}`)
  }

  return (
    <>
      <h2>종합예시 - 로그인 폼 (사용자 입력값을 각 개별 state변수로 관리)</h2>
      <form action="/login" method='post'  onSubmit={handleLoginSubmit} >
        <input 
          type="text" 
          placeholder='아이디 입력' 
          value={userId}
          onChange={handleUserIdChange}
        />
        <br />
        <input 
          type="password" 
          placeholder='비밀번호 입력'
          value={userPwd}
          onChange={handleUserPwdChange}
         />
        <br />
        <button type='submit'>로그인</button>
      </form>
    </>
  )
}

export default Example4
