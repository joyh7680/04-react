import React from 'react'
import MenuItem from './MenuItem'

/* 박스형태로 만드는 것으로 구성 
------------
| 메뉴명:xx |
| 가격:xx   |
------------
*/


// 메뉴목록 컴포넌트
//렌더링 시킬 메뉴 목록 데이터 전달 받기

function MenuList({menus}) { //menu === [{}, {}, ...]
  return (
    <div style={{display:'flex', flexWrap:'wrap', gap:'5px' }} >
      {menus.map((menu) => <MenuItem key={menu.menuCode} menu={menu} />)}
    </div>
  )
}

export default MenuList
