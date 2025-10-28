import { useEffect, useState } from "react"

function ReviewEx1(){
  //1 상태정의
  // const [상태이름, set상태이름] = useState(초기값)
  const [now, setNow] = useState(new Date().toLocaleTimeString())

  //2. 사이드 이펙트 처리 (useEffect)
  useEffect(() => {
    console.log('ReviewEx1 컴포넌트가 렌더링됌')
  })
  //컴포넌트가 마운트/업데이트 될 때 콘솔 로그 확인
  // 의존성 배열 생략 → 매 렌더링마다 실행

  // 3. 이벤트 핸들러 작성
  const handleNowClick = (e) => {   //e = 이벤트 객체 : 이벤트가 발생할 때 React가 자동으로 전달해주는 객체
    setNow(new Date().toLocaleTimeString())
  }
  // 버튼 클릭 시 현재 시간을 가져와 상태 업데이트
// 상태가 바뀌면 자동으로 화면 렌더링

// Step 4. JSX 렌더링
  return(
    <>
      <button onClick={handleNowClick}>Now</button>
      <h2>현지시간 : {now}</h2>
    </>
  )
}

export default ReviewEx1

/*
const [now, setNow] = useState(new Date().toLocaleTimeString())
 사고 과정: 왜 이렇게 쓰는가?
목표: “화면에 현재 시간을 표시하고, 버튼 클릭 시 갱신하고 싶다”
화면에 표시할 값 확인

현재 시간 → 문자열로 보여주고 싶음
→ 상태로 관리해야 화면이 바뀌면 자동 갱신됨
React에서 상태 만들기

useState 사용 → [값, 값을 바꾸는 함수]
패턴: const [상태이름, set상태이름] = useState(초기값)
초기값 정하기

초기값: 컴포넌트가 처음 렌더링될 때 보여줄 값
현재 시간 문자열 → new Date().toLocaleTimeString()
상태 업데이트

버튼 클릭 → setNow(new Date().toLocaleTimeString()) 호출
상태가 바뀌면 화면 자동으로 재렌더링 → 현재 시간 갱신
*/