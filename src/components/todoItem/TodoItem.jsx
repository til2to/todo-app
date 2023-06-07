import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.css';

const TodoItem = ({
  todoItem, setTodos, delTodo, updateTitle,
}) => {
  const [editing, setEditing] = useState(false);

  const toggleEditing = () => {
    setEditing((prevState) => !prevState);
  };

  const handleCheckbox = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      toggleEditing();
    }
  };

  return (
    <li className="todo-item">
      {!editing && (
        <>
          <input
            type="checkbox"
            checked={todoItem.completed}
            onChange={() => handleCheckbox(todoItem.id)}
          />
          <span className="todo-text">{todoItem.title}</span>
        </>
      )}

      {editing && (
        <input
          className="textInput"
          type="text"
          onChange={(e) => updateTitle(e.target.value, todoItem.id)}
          onKeyDown={handleKeyDown}
        />
      )}

      {!editing && (
        <div
          onClick={toggleEditing}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
        >
          Edit
        </div>
      )}

      <button type="button" onClick={() => delTodo(todoItem.id)}>
        Delete
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todoItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool,
    id: PropTypes.number,
  }).isRequired,

  setTodos: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  updateTitle: PropTypes.func.isRequired,
};

export default TodoItem;
