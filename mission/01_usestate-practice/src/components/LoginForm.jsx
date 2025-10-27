import { useState } from "react";

function LoginForm() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (id && pw) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>{id}님, 환영합니다 🎉</p>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
          <button type="submit">로그인</button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
