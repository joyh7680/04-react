function Box(){

  //이벤트 핸들러 함수
  const handelMouseOver = () =>{
    console.log('마우스가 들어옴');
  }

  return(
    <div 
      onMouseOver={handelMouseOver} 
      onMouseLeave={()=> console.log('마우스 나감')}>
      마우스를 올려보세요
    </div>
  )
}

export default Box 