import  { useEffect, useState } from 'react'

function Example1() {
  // 1. 의존성 배열이 없는 경우 => 렌더링 할 때마다 (mount랑 Update때마다) 동작함
  // 최초의 렌더링이 된 시점 

  //new Date 데이트 객체 생성
  const [now, setNow] = useState(new Date().toLocaleTimeString())

  //3) useEffect 안의 코드는 컴포넌트가 렌더링될 때마다 실행
  // 의존성 배열이 없으므로 마운트 + 모든 업데이트 시 실행
  useEffect(() => {
    console.log('Example 컴포넌트가 렌더링됨')
  })

  //setUp 함수가 동작되는 시점
  // 1. 처음 컴포넌트가 렌더링 될때 (Mount, componentDidMount) 
  //2. 다시 렌더링 될때 (Update, componentDidupdate)

  const handleNowClick = (e) => {
    setNow(new Date().toLocaleTimeString())
  }

  return (
    <div>
      <button onClick={handleNowClick}>Now</button>
      <h2>현재 시간: {now}</h2>
    </div>
  )
}

export default Example1