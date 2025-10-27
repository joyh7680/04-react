import { useState } from "react";

function Todos() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!todo.trim()) return;
    setTodos([...todos, todo]);
    setTodo("");
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodo}>추가</button>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>
            {t} <button onClick={() => removeTodo(i)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
