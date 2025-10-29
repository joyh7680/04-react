import React from 'react'
import { useSearchParams } from 'react-router-dom' 
      //useSearchParams :URL 쿼리 스트링을 읽거나 수정할 수 있음

function Info() {

  // 1 상태관리 useSearchParams()
  // useSearchParams()  //[URLSearchParams객체, 쿼리스트링수정할수 있는 함수] 배열의 형태로 반환
  const [searchParams] = useSearchParams() //useSearchParams 호출

  // 2 콘솔확인
  // console.log(searchParams)

  // 3 
  const name = searchParams.get('name') || 'Guest'; //URL에서 name 값 가져옴/값이 없으면 'Guest'를 기본값으로 설정
  const age = searchParams.get('age') || 0; //URL에서 age 값 가져옴, 없으면 0

  return (
    // 4) ui 구성 
    <div>
      <h5>Info 페이지</h5>
      <p>
        Weclome {name}!
        {age > 0 && `You are ${age} years old.` } 
      </p>
    </div>
  )
}

export default Info

/*
const [searchParams] = useSearchParams() : 
useSearchParams 호출
URL의 쿼리 스트링을 읽기 위한 Hook
[searchParams, setSearchParams] 형태의 배열 반환
여기서는 읽기만 하므로 첫 번째 요소 searchParams만 사용
*/