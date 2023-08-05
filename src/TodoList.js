function TodoList(props) {
    return (
      <ul>
        {props.children}
      </ul>
    );
  }
// export nombrado para evitar equivocaciones
export {TodoList}; 