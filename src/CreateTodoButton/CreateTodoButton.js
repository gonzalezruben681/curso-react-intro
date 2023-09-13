import { useContext } from 'react';
import './CreateTodoButton.css'
import { TodoContext } from '../TodoContext/TodoContext';

function CreateTodoButton() {
  const {openModal, setOpenModal} = useContext(TodoContext);
  
  const abrirModal = () => {
    setOpenModal(!openModal);
  }
    return (
      <button className="CreateTodoButton" onClick={abrirModal
    }>+</button>
    );
  }
// export nombrado para evitar equivocaciones
export {CreateTodoButton}; 