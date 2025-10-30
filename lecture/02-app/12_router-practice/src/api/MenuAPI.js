import menus from '../data/menu.json'
//mens === [{메뉴객체},{},{} ''' ]

//메뉴 전체 목록조회용
function getMenus() {
  return menus;
}

//메뉴 상세 조회용 (조회할 메뉴 코드 필요)
function getMenuDetail(id) { //id === 조회할 메뉴 코드값(전달값)
  //menus 배열 내에 해당id를 menuCode로 가지고 있는 메뉴 객체 찾아서 반환
  // /menus.json'를 순회하면서 찾음, 일일이 비교하면서
  // menu.menuCode === id 일치하는걸 find순회하면서 찾겠다 
  return menus.find((menu) => menu.menuCode === parseInt(id))
}

//메뉴 검색결과 목록 조회용 (검색창) 
function searchMenus(condition, keyword) { 
  //condition === 검색조건("menuName"|"categoryName"), keyworkd  === 검색어
  //filter 메소드 콜백함수. true인 값 반환
  return menus.filter((menu) => menu[condition].includes(keyword));
}

export {getMenus, getMenuDetail, searchMenus}

/*
* return menus.find((menu) => menu.menuCode === parseInt(id))

menus는 배열(Array)
const menus = [
  { menuCode: 1, name: "커피" },
  { menuCode: 2, name: "케이크" },
  { menuCode: 3, name: "샌드위치" },
]
 
.find()는 배열에서 조건에 맞는 첫 번째 요소를 찾아 반환하는 함수

parseInt(id)
id는 아마 문자열(string)일 거예요.
parseInt(id)는 그걸 정수로 변환

menus 배열의 각 요소를 하나씩 확인하면서
그 요소의 menuCode가 id(문자열 → 숫자로 바꾼 값)과 같은지 비교하고
처음으로 조건이 맞는 객체를 반환합니다.

* menus.filter((menu) => menu[condition].includes(keyword));

.filter((menu) => { ... })
filter()는 배열에서 조건에 맞는 모든 요소를 추려서 새로운 배열로 반환하는 메서드예요.
조건식이 true인 항목만 남기고, false인 항목은 버립니다.

menu[condition]
menu[condition]는 대괄호 표기법으로, condition 변수에 들어 있는 문자열을 key로 사용해 속성값에 접근

.includes(keyword)
문자열이나 배열에서 특정 값이 포함되어 있는지 확인하는 메서드입니다.
포함되어 있으면 true, 없으면 false를 반환
 */