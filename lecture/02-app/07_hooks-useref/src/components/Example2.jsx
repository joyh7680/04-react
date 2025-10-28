import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
//dom 요소 직접 접근하는 사용 예시

function Example2() {

  //컴포넌트 렌더링시 해당 텍스트 상자에 focusing 효과주기

  // 1) 첫번째로 실행되는 내용
  const inputRef = useRef() // {current: undefined}

  useEffect(() => {
    //3)
    inputRef.current.focus()
  }, [])

  return (
    <>
     <input 
      type="text"
      ref = {inputRef} //2)  inputRef == {current : input DOM요소객체}
      />
    </>
  )
}

export default Example2
