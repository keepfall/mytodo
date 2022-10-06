import React from 'react';
import './style.css';
import Todo from '../todo/Todo.jsx';

const List = ({ todoList, setTodoList }) => {
  const onRemove = (key) => {
    const newTodoList = todoList.filter((item) => item.key !== key);
    setTodoList(newTodoList);
  };

  const onDone = (key) => {
    const newTodoList = todoList.map((item) => {
      if (item.key === key) {
        return { ...item, isDone: !item.isDone };
      } else {
        return { ...item };
      }
    });
    setTodoList(newTodoList);
  };

  return (
    <div className="list">
      <h2>🔥 Working 🔥</h2>
      <div className="todo-list">
        {todoList.map((item) => {
          if (!item.isDone) {
            return (
              <Todo todoList={item} key={item.key} setTodoList={setTodoList} onRemove={onRemove} onDone={onDone} />
            );
          } else {
            return null;
          }
        })}
      </div>
      <h2>✨ Done ✨</h2>
      <div>
        <div className="todo-list">
          {todoList.map((item) => {
            if (item.isDone) {
              return (
                <Todo todoList={item} key={item.key} setTodoList={setTodoList} onRemove={onRemove} onDone={onDone} />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default List;
