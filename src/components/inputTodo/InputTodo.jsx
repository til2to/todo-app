import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.css';

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
    } else {
      setMessage('please add a task');
    }
  };

  return (
    <>
      <form className="input-container" onSubmit={handleSubmit}>
        <input
          className="text-input"
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <span>{message}</span>
    </>

  );
};

InputTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};

export default InputTodo;
