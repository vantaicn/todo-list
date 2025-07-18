import { useState } from "react";

const ToDoForm = ({ onAddTask }) => {
  const [valueInput, setValueInput] = useState("");

  return (
    <form
      className="todo-form"
      autoComplete="true"
      onSubmit={(event) => {
        event.preventDefault();
        onAddTask(valueInput);
        setValueInput("")
        console.log(valueInput)
        // onAddTask(event.currentTarget.task.value)
        // event.currentTarget.task.value=""
      }}
    >
      <div className="form-group">
        <label htmlFor="todo-input">Task</label>
        <input
          type="text"
          id="todo-input"
          name="task"
          placeholder="Input your task"
          required
          value={valueInput}
          onChange={(event) => {
            setValueInput(event.target.value);
          }}
        />
      </div>
      <input type="submit" value="Add" className="submit-btn" />
    </form>
  );
};

export default ToDoForm;
