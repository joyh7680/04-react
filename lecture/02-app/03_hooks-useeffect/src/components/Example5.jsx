// API통신 예시
import React, { useEffect, useState } from 'react'

function Example5() {

  //코드 실행 흐름적으로 실행해보기 
  // 1)데이터 불러오기 (fetch)
  let arr = []; //비어 있는 배열 arr을 하나 만듭니다.
  /*→ posts 상태를 arr 값으로 초기화합니다.
  하지만 arr은 아직 비어 있는 [] 상태이므로 
  posts도 처음에는 빈 배열이에요.*/

  /*→ fetch() 함수로 외부 API(가짜 게시글 데이터)를 요청합니다.이건 비동기로 작동해요. 즉, 요청이 끝나기 전에 다음 코드(useState)가 바로 실행됩니다.
  fetch("https://jsonplaceholder.typicode.com/posts") 
    .then(response => response.json())
    .then(jsonData => arr = jsonData)
  */

  //2) 불러온 데이터로 상태 변수 초기화  
  // const [상태이름, set상태이름] = useState(초기값)
  // const [posts, setPosts] = useState(현재전체게시글 목록 배열);
  // const [posts, setPosts] = useState(arr);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
     .then(response => response.json())
     .then(jsonData => setPosts(jsonData));
  }, [])

  /*
   ## useEffect를 통해서 데이터 불러오기
    1. 초기 state - 빈배열로 설정
    2. 컴포넌트 초기 렌더링
      - return문 실행
      - 화면에 빈 배열로 렌더링(아무것도 안보임)
      - Mount
    3. useEffect의 setup함수 실행 
     - fetch 시작 (데이터요청 보내놓기, 백그라운드로 실행)

    4. (잠시후) fetch 완료 
    - 데이터 받아짐
    - setPosts(데이터 ) 실행
    - state 업데이트

    5. 컴포넌트 리렌더링
    - return문 실행
    - 응답된 데이터가 담겨있는 posts기반으로 렌더링 

  */

  //return (...)  → JSX를 렌더링합니다.
// posts가 비어 있어서 화면엔 아무 게시글도 안 보입니다.
  return (
    <>
      <h2>전체 게시글 목록</h2>
      {/* 현재 게시글 목록 데이터 출력하기  */}
      {
        posts.map((post) =>(
          <div key={post.id} >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ) )
      }
    </>
  )
}

export default Example5


/*
 https://jsonplaceholder.typicode.com/posts
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
*/

/*
 ##컴포넌트 본문에 바로 외부 API 통신하는 코드 작성 시 문제점
 1. 비동기 타이밍 문제 (fetch는 비동기)
  1) let arr = []; (빈배열)
  2)  fetch시작 (데이터 요청 보내놓기, 백그라운드에서 실행)
  3) const[posts] useState(arr) 실행
  4) 렌더링
  5) (나중에) fetch완료 => arr = jsondata

  2. 무한 반복문제 
  컴포넌트가 렌더링 될때(초기, props변화, state변화)마다 컴포넌트 함수 전문 실행 
  즉, 렌더링될때마다 계속 fetch실행 => 불필요한 네트워크 요청 지속
*/