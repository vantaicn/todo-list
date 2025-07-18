
const ToDoItem = ({ taskData, handleToggleTask, onDeleteTask }) => {

  return (
    <div className={`todo-item ${taskData.completed ? "completed" : ""}`}>
      <span className="task-text">
        {taskData.task}
      </span>
      <div className="task-actions">
        <button
          className="toggle-btn fas fa-check"
          onClick={() => {
            handleToggleTask(taskData.id);
          }}
        >
        </button>
        <button
          className="delete-btn fas fa-trash"
          onClick={() => {
            onDeleteTask(taskData.id);
          }}
        >
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
