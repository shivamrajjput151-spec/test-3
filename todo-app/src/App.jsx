import React, { useState } from "react";
import "./App.css";

// initial data
const todosData = [];

const TodoApp = () => {
  const [todos, setTodos] = useState(todosData);

  const [todoInput, setTodoInput] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  

  // edit ke liye
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  function handleAdd() {
    console.log(todoInput, "todoInput before add");
    if (todoInput.trim() == "") {
      alert("Todo cannot be empty");
      return;
    }
    const newTodo = {
      id: Date.now(),
      title: todoInput,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTodoInput(""); // clear input
  }

  function handleToggle(id) {
    const updated = todos.map((todo) => {
      if (todo.id == id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updated);
  }

  function handleDelete(id) {
    // console.log("deleting", id)
    const filtered = todos.filter((todo) => todo.id != id);
    setTodos(filtered);
  }

  function startEdit(todo) {
    setEditId(todo.id);
    setEditValue(todo.title);
  }

  function saveEdit(id) {
    if (editValue.trim() == "") {
      return; 
    }
    const updated = todos.map((todo) =>
      todo.id == id ? { ...todo, title: editValue } : todo
    );
    setTodos(updated);
    setEditId(null);
    setEditValue("");
  }

  function cancelEdit() {
    setEditId(null);
    setEditValue("");
  }

  function clearCompleted() {
    const remaining = todos.filter((todo) => todo.completed == false);
    setTodos(remaining);
  }

  let filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  if (filter == "completed") {
    filteredTodos = filteredTodos.filter((todo) => todo.completed == true);
  } else if (filter == "pending") {
    filteredTodos = filteredTodos.filter((todo) => todo.completed == false);
  }

  

  const totalCount = todos.length;
  const completedCount = todos.filter((todo) => todo.completed).length;
  const pendingCount = totalCount - completedCount;

  return (
    <div className="todo-app">
      <h1>Todo Application</h1>

      {/* add todo */}
      <div className="add-row">
        <input
          type="text"
          placeholder="Add a new todo"
          value={todoInput}
          onChange={(event) => setTodoInput(event.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {/* search */}
      <input
        type="text"
        placeholder="Search todos"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="search-box"
      />

      {/* filter buttons */}
      <div className="filter-row">
        <button
          onClick={() => setFilter("all")}
          className={filter == "all" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={filter == "completed" ? "active" : ""}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("pending")}
          className={filter == "pending" ? "active" : ""}
        >
          Pending
        </button>
      </div>

      

      <div className="stats">
        <span>Total : {totalCount}</span>
        <span>Completed : {completedCount}</span>
        <span>Pending : {pendingCount}</span>
      </div>

      <button onClick={clearCompleted} className="clear-btn">
        Clear Completed
      </button>

      <div className="todo-list">
        {filteredTodos.length == 0 && <p>No todos found</p>}

        {filteredTodos.map((todo) => (
          <div key={todo.id} className="todo-item">
            {editId == todo.id ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={(event) => setEditValue(event.target.value)}
                />
                <button onClick={() => saveEdit(todo.id)}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggle(todo.id)}
                />
                <span className={todo.completed ? "completed" : ""}>
                  {todo.title}
                </span>
                <button onClick={() => startEdit(todo)}>Edit</button>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;