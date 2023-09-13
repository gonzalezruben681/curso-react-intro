
import { useContext } from 'react';
import './TodoSearch.css'
import { TodoContext } from '../TodoContext/TodoContext';

function TodoSearch() {
  const {searchValue, setSearchValue} = useContext(TodoContext);
    return (
      <input 
      placeholder="Cortar cebolla" 
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      />
    );
  }
// export nombrado para evitar equivocaciones
export {TodoSearch}; 