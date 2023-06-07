import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import TodoItem from '../todoItem/TodoItem';

const TodoList = ({
  todos, setTodos, delTodo, updateTitle,
}) => (
  <div className="all-todo-container">
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todoItem={todo}
        setTodos={setTodos}
        delTodo={delTodo}
        updateTitle={updateTitle}
      />
    ))}
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      description: PropTypes.string,
      completed: PropTypes.bool,
    }),
  ),
  setTodos: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  updateTitle: PropTypes.func.isRequired,
};

TodoList.defaultProps = {
  todos: [], // Set an empty array as the default value
};

export default TodoList;
