import './TodoList.css';
function TodoList({children}) {
    return (
      <ul className="TodoList">
        {children}
      </ul>
    );
  }
// export nombrado para evitar equivocaciones
export {TodoList}; 