import "./App.css";
import TodoInput from "./Component/TodoInput";
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (value) => {
    if (!value){return;}

    const newtask = {
      title: value,
      id: Math.floor(Math.random() * 100),
      completed: false,
    };
    const newTasks = [...tasks, newtask];
    setTasks(newTasks);
  };

  const Delete = (todoid) => {
    const updatedTasks = tasks.filter((task) => task.id !== todoid);
    setTasks(updatedTasks);
  };

  const Complete = (taskid) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskid) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <div className="App">
        <TodoInput addTask={addTask} />
        {tasks.map((task) => (
          
            <div key={task.id} className={task.completed ? "active" : "normal"}>
              {task.title}
              
                <button onClick={() => Delete(task.id)} className="delete">Delete</button>
                <button onClick={() => Complete(task.id)}  className="complete">Complete</button>
              </div>
           
       
        ))}
      </div>
    </div>
  );
}

export default App;
