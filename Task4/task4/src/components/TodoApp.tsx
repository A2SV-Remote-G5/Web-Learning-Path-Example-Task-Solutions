import { useState } from 'react';

type TodoProps = {
  text: string;
  index: number;
  onDelete: (index: number) => void;
  onUpdate: (index: number, newText: string) => void;
};

const Todo = ({ text, index, onDelete, onUpdate }: TodoProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(text);

  const saveEdit = () => {
    onUpdate(index, editValue);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={editValue} 
            onChange={(e) => setEditValue(e.target.value)} 
          />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
          {text}
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={() => onDelete(index)}>Delete</button>
    </li>
  );
};

const TodoApp = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const addTodo = () => {
    if (inputValue.trim() === '') return;
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const updateTodo = (index: number, newText: string) => {
    const updated = [...todos];
    updated[index] = newText;
    setTodos(updated);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input 
        type="text" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Enter todo"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <Todo 
            key={index}
            text={todo}
            index={index}
            onDelete={deleteTodo}
            onUpdate={updateTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
