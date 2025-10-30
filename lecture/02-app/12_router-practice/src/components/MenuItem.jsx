import React from 'react'
import { useNavigate } from 'react-router-dom'

// 메뉴한개에 대한 컴포넌트
function MenuItem({menu}) { //menu === {menuCome: xx, menuName:xx, price:xx }

  //2
   const navigate = useNavigate();
   //3
   const handleMenuClick = (e) => {
    navigate(`/menus/${menu.menuCode}`)
   }

  //1
  return (
    <div style={{width: '300px', border: '1px solid #000', padding: '0 10px', cursor: 'pointer'}}
    //4
      onClick = {handleMenuClick}>
      <h3>메뉴명:{menu.menuName}</h3>    {/* <h3>메뉴명:xx</h3> */}
      <p>가격: {menu.menuPrice}</p>
    </div>
  )
}

export default MenuItem
