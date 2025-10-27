import React, {useEffect, useState} from 'react'

function Example2() {
  const [now, setNow] = useState(new Date().toLocaleTimeString());

  //2. 의존성 배열이 빈배열일 경우 - 최초 렌더링시에만 (Mount)
  useEffect(() => {
    console.log("Example2 컴포넌트가 렌더링됨")
  }, [])
  //내가 지정한 값에만 동작을 시키고 싶을때

  const handleNowClick = () => {
    setNow(new Date().toLocaleTimeString())
  }

  return (
    <div>
      <button onClick={handleNowClick}>Now</button>
      <h2>현재 시간: {now}</h2>
    </div>
  )
}

export default Example2
