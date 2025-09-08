import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [newText, setNewText] = useState("");

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setNewText(todo.text); // prefill with current text
  };

  const saveUpdate = (id) => {
    if (newText.trim() !== "") {
      dispatch(updateTodo({ id, text: newText }));
    }
    setEditingId(null);
    setNewText("");
  };

  return (
    <ul className="list-none">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
        >
          {editingId === todo.id ? (
            <>
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className="px-2 py-1 rounded border"
              />
              <button
                onClick={() => saveUpdate(todo.id)}
                className="text-white bg-green-500 border-0 py-1 px-4 hover:bg-green-600 rounded ml-2"
              >
                Save
              </button>
              <button
                onClick={() => setEditingId(null)}
                className="text-white bg-gray-500 border-0 py-1 px-4 hover:bg-gray-600 rounded ml-2"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <div className="text-white">{todo.text}</div>
              <div className="flex gap-2">
                <button
                  onClick={() => startEditing(todo)}
                  className="text-white bg-blue-500 border-0 py-1 px-4 hover:bg-blue-600 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-white bg-red-500 border-0 py-1 px-4 hover:bg-red-600 rounded"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Todos;
