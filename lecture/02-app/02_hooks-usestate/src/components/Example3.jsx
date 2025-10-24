import React, { useState } from 'react'

function Example3() {
  //2
  // useState('') 빈문자열로 초기화 관리하겠다 
  const [selectedValue, setSelectedValue] = useState('')

  //3
  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value)
  }

  //1
  //option hidden : 통신사 선택시 option에 보이지 않게됌
  //selectedValue 변수로 관리하겠다
  return (
    <>
      <h2>셀렉트박스와 state</h2>
      <select 
        value = {selectedValue} 
        onChange={handleSelectChange}
        >
        <option hidden value="" >통신사 선택</option>
        <option>SKT</option>
        <option>KT</option>
        <option>LG U+</option>
      </select>
      <h5>선택값: {selectedValue}</h5>
    </>
  )
}

export default Example3
