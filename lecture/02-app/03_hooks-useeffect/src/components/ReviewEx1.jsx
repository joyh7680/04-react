import { useEffect, useState } from "react"

//목표: “화면에 현재 시간을 표시하고, 버튼 클릭 시 갱신하고 싶다”
/*화면에 표시할 값 확인
현재 시간 → 문자열로 보여주고 싶음
→ 상태로 관리해야 화면이 바뀌면 자동 갱신됨*/

function ReviewEx1(){
  //2 상태선언
  const [now, setNow] = useState(new Date().toLocaleTimeString())

  //3 부수 효과(useEffect) 정의
  useEffect(() => {
    console.log('Example 컴포넌트가 렌더링됨')
  })

  //4 이벤트 핸들러 함수(event handler function) 정의 작성
  const handleNowClick = (e) => {
    setNow(new Date().toLocaleDateString())
  }

  return (
    <>

    </>
  )
}

export default ReviewEx1