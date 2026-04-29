import Input from "./Input";
import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={text}
        onChange={(event) => setText(event.target.value)}
      ></Input>
      <Input
        type="text"
        placeholder="Digite a data"
        value={day}
        onChange={(event) => setDay(event.target.value)}
      ></Input>

      <button
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
        onClick={() => {
          // Verificar se os campos não estão vazios antes de adicionar a tarefa
          if (!text.trim() || !day.trim()) {
            return alert("Por favor, preencha todos os campos.");
          }
          onAddTaskSubmit(text, day);
          setText("");
          setDay("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
