import React, { useEffect, useState } from "react";

export default function TodoList() {
  // 할일을 state로 관리하는 변수. => 배열
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // 저장 기능 =>
    // localStorage
    if (todos.length !== 0) localStorage.setItem("todos", todos);
  }, [todos]);

  useEffect(() => {
    // 불러오기 기능
    // setTodos(localStorage.getItem("todos"));
    console.log(localStorage.getItem("todos"));
  }, []);

  // 추가하기
  // => todos 배열에 값 하나를 추가해주면 된다.
  function addTodo() {
    // 기존 state를 가져와서
    // 새로운 값으로 업데이트를 한 다음
    // setTodos에 넘겨 준다.
    // => 새로운 todos로 업데이트 됨.

    let newTodo = [...todos];

    // newTodo 값 업데이트
    newTodo.push("새롭게 할 일");

    setTodos(newTodo);
  }

  return (
    <div>
      {/* todos를 하나하나 돌면서 화면에 보여주면 됨. */}
      {todos.map((item) => {
        // item을 이용해서 처리
        return <div>{item}</div>;
      })}
      <button onClick={addTodo}>추가하기</button>
    </div>
  );
}
