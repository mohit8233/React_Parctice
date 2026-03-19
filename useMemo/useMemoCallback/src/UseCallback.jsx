import React, { useState, useCallback } from "react";

 // child 
const TodoList = React.memo(({ todos, deleteTask }) => {
  console.log("Child render");

  return (
    <div className="w-full">
      <h2 className="font-semibold mb-2">Tasks:</h2>

      {todos.length === 0 ? (
        <p className="text-gray-400 text-sm">No tasks yet</p>
      ) : (
        todos.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b py-1"
          >
            <span>{item}</span>
            <button
              onClick={() => deleteTask(index)}
              className="text-red-500 text-sm"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
});

const UseCallback = () => {
  const [theme, setTheme] = useState("light");
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);


  function handleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }


  const addTask = useCallback(() => {
       if(task.trim()=== "") return;
       setTodos((prev)=>[...prev, task]);
       setTask("")
  }, [task]);

  
  const deleteTask = useCallback((index) => {
      setTodos((prev)=> prev.filter((__,i)=> i!== index))
  }, []);

  return (
    <div
      className={`min-h-screen flex items-center justify-center `}
    >
      <div
        className={`w-[350px] p-5 rounded shadow flex flex-col gap-3 ${
          theme === "light" ? "bg-gray-300 text-black" : "bg-gray-700 text-white"
        }`}
      >
        <h1 className="text-xl font-bold text-center">Todo App</h1>

        <input
          type="text"
          value={task}
          placeholder="Enter task"
          onChange={(e) => setTask(e.target.value)}
          className="border p-2 rounded text-black"
        />

        <button
          onClick={addTask}
          className="bg-blue-500 text-white py-2 rounded"
        >
          Add Task
        </button>
        <button
          onClick={handleTheme}
          className="bg-green-500 text-white py-2 rounded"
        >
          Change Theme
        </button>
        <p>this is {theme} theme </p>

       
        <TodoList todos={todos} deleteTask={deleteTask} />
      </div>
    </div>
  );
};

export default UseCallback;