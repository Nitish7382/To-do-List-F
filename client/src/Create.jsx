import React, { useState } from "react";
import axios from "axios";

function Create() {
  const [task, setTask] = useState("");
  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", { task: task })
      .then((res) => {
        location.reload(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="items-center justify-center flex mt-2">
      <div className="items-center border-1 bg-slate-200  border-black h-10 w-72 rounded-full pl-4 mt-2 flex">
        <input
          type="text"
          className=" h-6 w-56 bg-transparent  placeholder:bg-slate-200 focus:outline-none focus:ring-0 focus:bg-gray-200"
          placeholder="Enter Task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          type="button"
          className="h-10 w-20 items-center flex  justify-center bg-green-500 rounded-full"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Create;
