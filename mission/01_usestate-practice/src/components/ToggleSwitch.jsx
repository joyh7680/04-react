/* 
3) 토글 스위치 컴포넌트 제작 
1: 요구사항 이해
버튼 클릭 시 ON ↔ OFF 상태 변경
화면에 현재 상태 표시
버튼 텍스트도 상태에 따라 바뀌어야 함
*/
import { useState } from "react";

function ToggleSwitch() {

  // 2: 상태(state) 설계 :상태는 두 가지 중 하나 → boolean (true = ON, false = OFF)
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      {/* 3: 화면 표시*/}
      <p>현재 상태: {isOn ? "ON" : "OFF"}</p>
       {/* 4: 버튼 만들기 + 이벤트 연결 */}
       {/* 5. JSX 구조 정리 */}
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "끄기" : "켜기"}
      </button>
    </div>
  );
}

export default ToggleSwitch;

/*
 ? : 삼항연산자
조건 ? 참일 때 값 : 거짓일 때 값

<p>현재 상태: {isOn ? "ON" : "OFF"}</p>
{} 안에서 JS 표현식 사용 중
isOn ? "ON" : "OFF" 는 삼항연산자
isOn이 true면 "ON"
isOn이 false면 "OFF"
즉, 화면에 현재 상태: ON 또는 현재 상태: OFF 가 표시됨

초기값이 false이기 때문에 "현재 상태 : OFF " 화면 표시됌

*/
