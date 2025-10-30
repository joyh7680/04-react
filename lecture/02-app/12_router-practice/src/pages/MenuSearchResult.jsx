import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import MenuList from '../components/MenuList';
import { searchMenus } from '../api/MenuAPI';

function MenuSearchResult() {

  //5
  const [menus, setMenus] = useState([]);

  //2 
   const [searchParams] = useSearchParams() // [URLSearchParams 객체]

   //3
   const condition = searchParams.get('condition');
   const keyword = searchParams.get('keyword');

   //6
  useEffect(() => {
    setMenus(searchMenus(condition, keyword))
  }, []);

  return (
    <div>
      {/* 1 */}
      <h3>메뉴 검색 결과 페이지</h3>
      {/* 4  */}
      <MenuList menus={menus} />
    </div>
  )
}

export default MenuSearchResult
