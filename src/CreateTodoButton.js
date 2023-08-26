import './CreateTodoButton.css'
function CreateTodoButton() {
    return (
      <button className="CreateTodoButton" onClick={(event)=> {
        console.log('le diste click')
        console.log(event)
    }}>+</button>
    );
  }
// export nombrado para evitar equivocaciones
export {CreateTodoButton}; 