import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import firebase from "../Firebase";
import "../Firebase";

const TodoList = () => {
  const { user, isAuthenticated } = useAuth0();
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTodo, setEditedTodo] = useState("");
  const [textOpen, setTextOpen] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // user ID configuration
  const getUserId = () => {
    const userId = JSON.stringify(user.sub);
    return isAuthenticated && userId;
  };

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      if (todos.length >= 5) {
        setTextOpen(true);
        setButtonDisabled(true);
        setTimeout(() => {
          setTextOpen(false);
          setButtonDisabled(false);
        }, 3000);
        return;
      }
      setTodos([...todos, newTodo]);
      setNewTodo("");
      ref.doc(newTodo).set({
        id: newTodo,
        task: newTodo,
      });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    if (value.length <= 20) {
      setNewTodo(value);
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    // console.log(data[index].id);
    // console.log(todos[index]);
    ref.doc(`${data[index].id}`).delete();
  };

  const handleSaveEditTodo = (index, value) => {
    if (value.length >= 20) {
      value = value.slice(0, 20);
    }
    const newTodos = [...todos];
    newTodos[index] = value;
    setTodos(newTodos);
    setEditingIndex(null);
    setEditedTodo("");
    console.log(todos[index]);
    console.log(data[index].id);
    ref.doc(`${data[index].id}`).update({ task: value });
    return newTodos[index];
  };
  const handleSaveTodo = () => {
    if (editedTodo.trim()) {
      handleSaveEditTodo(editingIndex, editedTodo);
    }
  };

  // Firebase configuration
  const ref = firebase.firestore().collection(getUserId());

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  const getData = () => {
    ref.onSnapshot((QuerySnapshot) => {
      const items = [];
      QuerySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
      setLoader(false);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const newData = data.map((item) => `${item.task}`);
    setTodos(newData);
  }, [data]);

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-[600px] bg-gray-700  p-4">
          <div className="flex justify-between">
            <h1 className="text-white text-xl font-bold mb-4">Todo List</h1>
            {textOpen && (
              <p className="text-red-500  text-center animate-pulse">
                Limit Reached
              </p>
            )}
          </div>
          <div className="flex sm:flex-row flex-col mb-4 gap-4">
            <input
              type="text"
              placeholder="Add new task"
              value={newTodo}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              className="flex-1 mr-2 py-2 px-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button
              onClick={handleAddTodo}
              className="text-white font-bold flex-1 mr-2 py-2 px-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 bg-blue-900 hover:bg-blue-800"
              disabled={buttonDisabled}
            >
              Add
            </button>
          </div>

          <ul className="max-h-96 overflow-y-auto">
            {todos.map((todo, index) => (
              <li
                key={index}
                className="py-2 text-wh text-white border-b border-gray-400 last:border-b-0 flex items-center justify-between"
              >
                <div className="flex-1">
                  {editingIndex === index ? (
                    <input
                      type="text"
                      value={editedTodo}
                      onChange={(event) => setEditedTodo(event.target.value)}
                      onKeyDown={(event) =>
                        event.key === "Enter"
                          ? handleSaveEditTodo(index, editedTodo)
                          : null
                      }
                      className="w-[90%] text-black ml-2 mr-3 py-1 px-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  ) : (
                    <span>{todo}</span>
                  )}
                </div>
                <div className="flex">
                  {editingIndex === index ? (
                    <>
                      <button
                        className="btn-secondary bg-green-500 rounded px-3 p-1"
                        onClick={handleSaveTodo}
                      >
                        Save
                      </button>
                      <button
                        className="btn-secondary ml-2 bg-rose-500 px-2 p-1 rounded"
                        onClick={() => {
                          setEditingIndex(null);
                          setEditedTodo("");
                        }}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn-secondary ml-2 bg-red-500 rounded p-1"
                        onClick={() => handleDeleteTodo(index)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn-secondary ml-2 bg-blue-500 rounded p-1 px-3"
                        onClick={() => {
                          setEditingIndex(index);
                          setEditedTodo(todo);
                        }}
                      >
                        Edit
                      </button>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TodoList;
