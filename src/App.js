import React, { useState } from "react";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

const defaultTodos = [
  {text:'Cortar', completed: true},
  {text:'Tomar el curso de Intro a React.js', completed: false},
  {text:'Llorar con la Llorona', completed: false},
  {text:'sfgsf', completed: false},
  {text:'hola', completed: false},
];
function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState('');
  console.log('los usuarios buscan todos de '+ searchValue);

  // estados derivados del estado de hooks
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}

          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
