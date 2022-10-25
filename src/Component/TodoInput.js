import React, { useState } from "react";

function App({ addTask }) {
  const [todoinput, setTodoinput] = useState("");

  const handelInput = (e) => {
    setTodoinput(e.target.value);
  };

  const add = (e) => {
     e.preventDefault();
    addTask(todoinput);
    setTodoinput("");
  };

  return (
    <form>
    <div style={{ marginTop: 50, marginBottom: 20, padding: 30 }}>
      <h1 style={{ color: "white" }}>What's the plan for Today ?</h1>
      <input
        className="todoInput"
        type="text"
        value={todoinput}
        onChange={handelInput}
      />
      <button onClick={add} type="submit" className="button">
        Add Todo
      </button>
    </div>
    </form>
  );
}
export default App;
