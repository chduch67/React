import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import TextInput from './TextInput';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      setTodos([...todos, { text: todoText }]);
      setTodoText('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <Header />
      <div>
        <TextInput
          value={todoText}
          onChange={handleInputChange}
          placeholder="할 일 입력"
        />
        <Button onClick={handleAddTodo}>추가하기</Button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo.text}
              <Button onClick={() => handleDeleteTodo(index)}>완료</Button>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default App;