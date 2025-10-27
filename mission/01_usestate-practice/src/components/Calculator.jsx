import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const sum = Number(num1) + Number(num2);

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="숫자 1"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="숫자 2"
      />
      <p>결과: {isNaN(sum) ? 0 : sum}</p>
    </div>
  );
}

export default Calculator;
