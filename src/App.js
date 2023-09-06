import React, { useState } from "react";
import { CreateTodoButton } from "./CreateTodoButton/CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

// const defaultTodos = [
//   {text:'Cortar', completed: true},
//   {text:'Tomar el curso de Intro a React.js', completed: false},
//   {text:'Llorar con la Llorona', completed: false},
//   {text:'sfgsf', completed: false},
//   {text:'hola', completed: false},
// ];

// EL CUSTOM HOOKS
function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem)
  };
  return [item, saveItem];
}


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
    <>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
