import React, { useEffect, useState } from 'react'

//1 컴포넌트 골격 생성 - 
function ReviewEx5() {

  //2상태 변수 선언
  const [posts, setPosts] = useState([]) // [](빈 배열) 초기값 설정
  // 화면에 표시할 변하는 값(posts) 정의
 

  //3 사이드 이펙트 처리 (API 요청)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(jsonData => setPosts(jsonData));
  },[] ) //마운트 시 한 번만 실행 → 외부 데이터 가져오기

  return(
    <>
      {/*4.  JSX 작성 */}
      <h2>전체 게시글 목록</h2>
      {
        posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      }
    </>
  )
}

export default ReviewEx5;



// https://jsonplaceholder.typicode.com/posts