import React, { useEffect, useState } from 'react'
import MenuList from '../components/MenuList'
import { getMenus } from '../api/MenuAPI'  
import MenuSearchForm from '../components/MenuSearchForm';

/* 구성방안
타이틀
검색폼
메뉴목록
*/

//메뉴 목록 페이지용 컴포넌트
function Menus() {

  // 2) 상태관리
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    setMenus(getMenus())
  }, [] )

  //1) ui 구성
  return (
    <div>
      <h3>메뉴 목록페이지</h3>

      {/* 검색폼 컴포넌트 */}
      <MenuSearchForm />

      {/* 메뉴목록 컴포넌트 */}
      {/* <MenuList menus=전체 메뉴 배열 객체를 전달시켜야함 /> */}
      {/* //3 */}
      <MenuList menus={menus} />

    </div>
  )
}

export default Menus

