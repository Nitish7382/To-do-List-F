import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import { MdDelete } from "react-icons/md";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handlecomplete = (id) => {
    axios
      .put("http://localhost:3001/update/" + id)
      .then((result) => location.reload(result))
      .catch((err) => console.log(err));
  };

  const handledelete = (id) => {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then((result) => location.reload(result))
      .catch((err) => console.log(err));
  };

  return (
    <div className="items-center justify-center flex h-screen bg-slate-600 ">
      <div className=" flex flex-col h-[350px] w-[350px] border-2 border-black rounded-2xl overflow-hidden bg-white">
        <h2 className="text-center font-bold text-3xl mt-5">Todo App</h2>
        <Create />
        {todos.length === 0 ? (
          <div className="self-center mt-20 text-xl text-gray-600 font-semibold" >No todos</div>
        ) : (
          todos.map((todo) => (
            <div className="flex justify-center mt-2">
              <div className=" flex items-center border-2 border-green-500 h-9 w-72 rounded-full pl-2 mt-2 ">
                {todo.done ? (
                  <IoIosRadioButtonOn className="h-5 w-5 text-green-700" />
                ) : (
                  <IoIosRadioButtonOff
                    className="h-5 w-5"
                    onClick={() => handlecomplete(todo._id)}
                  />
                )}

                <span
                  className={
                    todo.done ? "flex-1 ml-2 line-through" : " flex-1 ml-2"
                  }
                >
                  {todo.task}
                </span>
                <MdDelete
                  className="cursor-pointer h-5 w-5 text-red-500 mr-2"
                  onClick={() => handledelete(todo._id)}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
