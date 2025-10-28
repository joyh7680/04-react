import { useEffect, useState } from "react"

function ReviewEx2() {

  //1) useState 사용
  const [now, setNow] = useState(new Date().toLocaleTimeString())
   // count는 상태값, setCount는 상태 변경 함수
  // now**는 상태(state) 변수
  // 자동으로 생성되는 게 아니라 useState가 반환하는 배열의 첫 번째 요소임.

  //2 useEffect 사용
  useEffect(()=> {
    console.log("ReviewEx2 컴포넌트가 렌더링됌")

  }, [])

  // 3) 버튼 클릭 이벤트
  const handleNowClick = () => {
    setNow(new Date().toLocaleTimeString())
  }

  return (
    <>
      <button onClick={handleNowClick}>Now</button>
      <h2>현재시간 : {now}</h2>
      
    </>
  )
}

export default ReviewEx2
