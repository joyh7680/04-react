import { useState } from "react";

/*
 1) 카운터 컴포넌트 제작
 작성 사고 과정
Step 1: 요구사항 이해
사용자에게 이름과 나이 입력 받기
입력값을 화면에 실시간으로 표시
입력이 없으면 “입력 없음” 표시
핵심: “입력값 → 상태 관리 → 화면 표시” 흐름을 먼저 생각
*/

//1. 기본틀 구성
function UserInfo() {

 /*
 2. 상태(state) 설계 : 입력값은 변할 수 있으므로 상태로 관리해야 함
 name, age → 상태 변수
  setName, setAge → 상태 변경 함수
  초기값은 빈 문자열
  */
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div>
      {/* 3: JSX 구조 설계*/}
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)} //4: 이벤트 처리
      />
      <input
        type="number"
        placeholder="나이"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      {/* 5: 화면 표시 */}
      <p> 이름: {name || "입력 없음"}, 나이: {age || "입력 없음"}  </p>
    </div>
  );
}

export default UserInfo;
