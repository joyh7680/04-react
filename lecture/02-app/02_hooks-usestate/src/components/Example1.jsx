import React from 'react'

function Example1() {

  //2                                         '초기값'
  const [message, setMessage] = React.useState('');

  //3  e:이벤트 객체 
  const handleInputChange = (e) => {
    // console.log('change이벤트 발생')
    //e.target 이벤트
    setMessage(e.target.value)
  }

  //1
  //value={message} value에도 상태변수 할당 해줘야함--??
  return (
    <>
      <h2>입력상자 state</h2>
      <input 
        type="text" 
        placeholder='메세지 입력' 
        value={message}
        onChange={handleInputChange}
      />
      <h5>실시간 입력값: {message}</h5>
    </>
  )
}

export default Example1
