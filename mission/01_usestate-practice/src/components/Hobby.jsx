import { useState } from "react";

function Hobby() {
  const [hobbies, setHobbies] = useState([]);

  const toggleHobby = (value) => {
    if (hobbies.includes(value)) {
      setHobbies(hobbies.filter((h) => h !== value));
    } else {
      setHobbies([...hobbies, value]);
    }
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          value="운동"
          onChange={(e) => toggleHobby(e.target.value)}
        />
        운동
      </label>
      <label>
        <input
          type="checkbox"
          value="독서"
          onChange={(e) => toggleHobby(e.target.value)}
        />
        독서
      </label>
      <label>
        <input
          type="checkbox"
          value="영화"
          onChange={(e) => toggleHobby(e.target.value)}
        />
        영화
      </label>
      <p>선택한 취미: {hobbies.join(", ") || "없음"}</p>
    </div>
  );
}

export default Hobby;
