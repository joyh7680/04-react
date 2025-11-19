/*
const BASE_URL = 'http://localhost:3000'

const postAPI = {
  getAllPosts: async () => {
    const response = await fetch(`${BASE_URL}/posts`);
    const data = await response.json();
    return data;
  },
  getPostById: async (id) => {
    const response = await fetch(`${BASE_URL}/posts/${id}`)
    const data = await response.json();
    return data;
  },
  addPost: async (postData) => {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    });
    const data = await response.json();
    return data;
  },
  updatePost: async (id, postData) => {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    });
    const data = await response.json();
    return data;
  },
  deletePost: async (id) => {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: 'DELETE'
    });
    const data = await response.json();
    return data;
  }
}
export default postAPI;
*/

/*
  ## Axios 사용 버전
  1. 브라우저와 Node.js를 위한 Promise 기반 HTTP 클라이언트 라이브러리
  2. Pomise기반 : async/await 문법 사용 가능
  3. 자동 json 변환 : 요청/응답 데이터를 자동으로 JSON으로 변환
  4. 인터셉터 : 요청/응답을 가로채서 공통로직 처리 가능
  5. 에러 처리: HTTP 에러 상태 코드에 따라 자동으로 처리

  ## Fetch API와의 차이점
  - Fetch : 브라우저 내장 API (설치 필요 X), json() 메소드로 수동 변환 필요, 인터셉터 기능 제공x (fetch wrapper로 대체)
  - Axios : 별도 설치 필요 (npm install axios), 자동 json 변환, 더 간편한 문법
*/

import axios from "axios";

/*
  ## Axios 인스턴스 생성 - axios.create() ##

  설정 옵션
  - baseURL : 모든 요청의 기본 URL 
  - headers : 모든 요청에 포함된 기본 헤더
  - timeout : 요청 타임아웃 시간 (밀리초)
  ...

*/
const client = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

/*
  client.get(엔드포인트) - GET 요청 보내기

  엔드포인트 앞에 baseURL이 자동으로 붙음

  반환값 : 
  - axios 응답 객체를 반환 => data 속성에 실제 응답데이터가 담겨 있음 (json 반환 처리된)
*/

const postAPI = {
  // 모든 게시글 조회 (GET)
  getAllPosts: async () => {
    const { data } = await client.get("/posts");
    return data;
  },
  getPostById: async (id) => {
    const { data } = await client.get(`/posts/${id}`);
    return data;
  },
  // 게시글 생성 (POST)
  // client.post(url, data)
  addPost: async (postData) => {
    const { data } = await client.post("/posts", postData);
    return data;
  },
  updatePost: async (id, postData) => {
    const { data } = await client.put(`/posts/${id}`, postData);
    return data;
  },
  deletePost: async (id) => {
    const { data } = await client.delete(`/posts/${id}`);
    return data;
  },
};

export default postAPI;
