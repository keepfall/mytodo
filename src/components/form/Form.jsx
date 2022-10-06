import React from 'react';
import { useState } from 'react';
import './style.css';

const Form = ({ todoList, setTodoList }) => {
  const empty = { key: todoList.length + 1, title: '', body: '', isDone: false };
  const [inputValue, setInputValue] = useState(empty);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault(); // form tag의 새로고침을 막아준다.
    setTodoList([...todoList, { ...inputValue, key: todoList.length + 1 }]);
    setInputValue(empty);
  };

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <div className="input-set">
        <label className="form-title">제목</label>
        <input className="form-input" type="text" name="title" onChange={onChange} value={inputValue.title} required />
        <label className="form-title">내용</label>
        <input className="form-input" type="text" name="body" onChange={onChange} value={inputValue.body} required />
      </div>
      <button className="form-button" type="sumbit">
        추가하기
      </button>
    </form>
  );
};

export default Form;
