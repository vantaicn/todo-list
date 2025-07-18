import Header from "./components/Header";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import { useState } from "react";

const App = () => {
  const [taskList, setTaskList] = useState([]);

  const randomId = () => {
    return Math.floor(Math.random() * 10000);
  };

  const handleAddTask = (task) => {
    setTaskList([
      ...taskList,
      { id: randomId(), task: task, completed: false },
    ]);
  };

  const handleToggleTask = (id) => {
    setTaskList(
      taskList.map((element) => {
        if (element.id === id) {
          return { ...element, completed: !element.completed };
        }
        return element;
      })
    );
  };

  const handleDeleteTask = (id) => {
    setTaskList([...taskList.filter((element) => element.id !== id)]);
  };

  return (
    <>
      <Header />
      <ToDoForm onAddTask={handleAddTask} />
      <ToDoList taskList={taskList} handleToggleTask={handleToggleTask} onDeleteTask={handleDeleteTask} />
    </>
  );
};

export default App;
