import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function MenuSearchForm() {

  // **use hook 은 맨 상단에 정리 
  //2 상태관리
  const [searchInput, setSearchInput] = useState({
    condition: '',
    keyword: ''
  })

  //6 
  const navigate = useNavigate();

  //5 
  const handleSearchInputChange = (e) => {
    setSearchInput({
      ...searchInput,
      [e.target.name]: e.target.value
    })
  }

  //7 버튼클릭시 이벤트 함수
  const handleSearch = () => {
    navigate(`/menus/search?condition=${searchInput.condition}&keyword=${searchInput.keyword}`)
  }

  // 1 ui 
  return (
    <div style={{display: 'flex', gap:'5px', margin: '10px' }} >
      <select 
      name="condition" 
      value={searchInput.condition}
      // 4 
      onChange={handleSearchInputChange}
      >
        {/* // 3 value  */}
        <option value="menuName">메뉴명</option>
        <option value="categoryName">카테고리명</option>
      </select>
      <input 
        type="search"
        name='keyword' 
        placeholder='검색어를 입력해주세요' 
        value={searchInput.keyword}
        onChange={handleSearchInputChange}
       />
       <button onClick={handleSearch} >검색</button>
    </div>
  )
}

export default MenuSearchForm
