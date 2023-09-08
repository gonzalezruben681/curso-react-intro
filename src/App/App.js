import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   {text:'Cortar', completed: true},
//   {text:'Tomar el curso de Intro a React.js', completed: false},
//   {text:'Llorar con la Llorona', completed: false},
//   {text:'sfgsf', completed: false},
//   {text:'hola', completed: false},
// ];

function App() {

  //UTILIZANDO EL CUSTOM HOOKS
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');

  
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex( todo => todo.text === text);
    newTodos[index].completed=true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex( todo => todo.text === text);
    newTodos.splice(index,1);
    saveTodos(newTodos); 
  }
  
  // estados derivados del estado de hooks
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  const searchText = searchValue.toLowerCase();
  const searchedTodos = todos.filter((todo) => todo.text.toLowerCase().includes(searchText));

  return (
    <AppUI  
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  );
}

export default App;
