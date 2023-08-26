import React from "react";
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
];
function App() {
  return (
    <>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch />

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
