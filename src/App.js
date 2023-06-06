import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import TodoList from './components/todoList/TodoList';
import InputTodo from './components/inputTodo/InputTodo';

const App = () => {
  const uuid = parseInt(uuidv4(), 10);

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ]);

  // delete todo item
  const delTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  // push new task to todo array
  const addTodoItem = (title) => {
    const newTodo = {
      id: uuid,
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // update todo title
  const updateTitle = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: updatedTitle,
          };
        }
        return todo;
      }),
    );
  };

  return (
    <div className="app">
      <div className="app-container">
        <InputTodo addTodoItem={addTodoItem} />

        <TodoList
          todos={todos}
          setTodos={setTodos}
          delTodo={delTodo}
          updateTitle={updateTitle}
        />
      </div>
    </div>
  );
};

export default App;
