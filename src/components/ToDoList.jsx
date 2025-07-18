import ToDoItem from "./ToDoItem";

const ToDoList = ({ taskList, onDeleteTask, handleToggleTask }) => {
  return (
    <div className="todo-list">
      {taskList.map((element, index) => {
        return (
          <div key={element.id}>
            <ToDoItem
              taskData={element}
              onDeleteTask={onDeleteTask}
              handleToggleTask={handleToggleTask}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ToDoList;
