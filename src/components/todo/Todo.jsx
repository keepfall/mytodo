import React from 'react';
import './style.css';

const Todo = ({ todoList, onRemove, onDone }) => {
  return (
    <section className="todo">
      <div className="todo-container">
        <h2>{todoList.title}</h2>
        <div>{todoList.body}</div>
        <div className="button-set">
          <button className="todo-remove-button button" type="button" onClick={() => onRemove(todoList.key)}>
            삭제하기
          </button>
          <button className="todo-done-button button" type="button" onClick={() => onDone(todoList.key)}>
            {todoList.isDone ? '취소' : '완료'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Todo;
