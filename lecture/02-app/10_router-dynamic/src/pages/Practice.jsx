import React from 'react'
import { useParams } from 'react-router-dom'


/*
/practice/it/2
/practice/it/5
/practice/history/1
/practice/art/5
*/

function Practice() {

  //2 useParams 
  // useParams() // /{:category:"xxx"   id     }
  // 구조분해할당
  const {category, id} = useParams()

  return (
    <div>
       {/* //3 ui구성 */}
      <p>현재 카테고리 :{category}</p>
      <p>현재 아이디 :{id}</p>
    </div>
  )
}

export default Practice

/*
코드 작성순서(수업)
1. app.jsx -  식별자 경로설정
    <Route path="/profile/:category/:id" element={<Profile />} />

2. useParams -const구조분해할당
3. ui 구성 - return
*/

