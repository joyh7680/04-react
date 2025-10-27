

/*
생각 포인트:

상태(state)가 필요하다 → count
상태를 변경하는 함수 필요 → setCount
버튼 클릭 이벤트 → 상태 변경
화면에는 현재 상태 표시 → {count}
*/

import { useState } from "react";

//1. 컴포넌트 틀 만들기
function Counter() {
  // 2. 상태 선언 - React에서 상태는 useState로 관리
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* 3. 화면에 상태 표시 */}
      <p>현재 카운트: {count}</p>
       {/* 4. 버튼 만들기 + 이벤트 연결 */}
      <button onClick={() => setCount(count + 1)}>+ 1</button>
      <button onClick={() => setCount(count - 1)}>- 1</button>
      <button onClick={() => setCount(0)}>초기화</button>
    </div>
  );
}

export default Counter;
