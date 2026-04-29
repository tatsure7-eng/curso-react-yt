import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Taskes from "./components/Tasks";
import { v4 } from "uuid";
import Title from "./components/Tittle";


function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
//     // Chamar Api
//     const fetchTasks = async () => {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/todos?_limit=10",
//         {
//           method: "GET",
//         },
//       );
      
//       // Pegar os dados Que Ela retorna
// const data = await response.json();
// console.log(data);
//       // Salvar os dados no estado
//       setTasks(data);
//     }
//     fetchTasks(); 
  }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(text, day) {
    const newTask = {
      id: v4(),
      text,
      day,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
       <Title>Gerenciador de tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Taskes
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
