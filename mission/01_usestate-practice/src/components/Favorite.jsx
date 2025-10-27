// 4) 취향 선택 컴포넌트 제작

import { useState } from "react";

function Favorite() {
  const [food, setFood] = useState("");

  return (
    <div>
      <label>
        <input
          type="radio"
          name="food"
          value="피자"
          onChange={(e) => setFood(e.target.value)}
        />
        피자
      </label>
      <label>
        <input
          type="radio"
          name="food"
          value="치킨"
          onChange={(e) => setFood(e.target.value)}
        />
        치킨
      </label>
      <label>
        <input
          type="radio"
          name="food"
          value="라면"
          onChange={(e) => setFood(e.target.value)}
        />
        라면
      </label>
      <p>선택한 음식: {food || "없음"}</p>
    </div>
  );
}

export default Favorite;
