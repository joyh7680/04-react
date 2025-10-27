import { useState } from "react";

function Item() {
  const [item, setItem] = useState("");

  return (
    <div>
      <select value={item} onChange={(e) => setItem(e.target.value)}>
        <option value="">-- 상품 선택 --</option>
        <option value="노트북">노트북</option>
        <option value="핸드폰">핸드폰</option>
        <option value="이어폰">이어폰</option>
      </select>
      <p>선택한 상품: {item || "없음"}</p>
    </div>
  );
}

export default Item;
