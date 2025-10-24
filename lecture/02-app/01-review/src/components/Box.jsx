function Box(){
  const handleMouseOver = () => {
    console.log('mouse up')

  }

  return (
    <div 
      onMouseOver={handleMouseOver} 
      onMouseLeave={()=> console.log('마우스 아웃')} >
       마우스를 올려보세요
    </div>
  )
}

export default Box
