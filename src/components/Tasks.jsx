import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Taskes({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();
  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("text", task.text);
    query.set("day", task.day);
    navigate(`/tasks?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow ">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left w-full flex items-center gap-2 text-white p-2 rounded-md ${
              task.isCompleted && "line-through"  
            }`}
          >
            {task.isCompleted && <CheckIcon/> }
            {task.text}
          </button>

          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>

          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}
export default Taskes;
