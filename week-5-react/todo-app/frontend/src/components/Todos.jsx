const Todos = ({ todos }) => {
  if (!todos) return;
  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <h1>{todo?.title}</h1>
            <h2>{todo?.description}</h2>
            <button>{todo.completed == true ? "Completed" : "Mark as complete"}</button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
