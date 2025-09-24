
import { useState } from 'react';
import TodoListItem from './Components/TodoListItem';

const getInitialTodos = () => {
  const savedTodos = localStorage.getItem('todos');
  if (savedTodos) {
    return JSON.parse(savedTodos);
  } else {
    return [];
  }
};

function App() {
  const [title, setTitle] = useState('')
  const [todos, setTodos] = useState(() => getInitialTodos());
  const [isEditing, setIsEditing] = useState(null);

  // useEffect(() => {
  //   const todos = getInitialTodos();
  //   setTodos(todos);
  //   console.log("Hello World!");
  // }, []);

  const addTodo = () => {
    if (title.trim() === '') {
      return;
    }

    if (isEditing) {
      //update the todo
      setTodos(prev => prev.map((todoToEdit) => todoToEdit.id === isEditing ? { ...todoToEdit, title: title } : todoToEdit));
      localStorage.setItem('todos', JSON.stringify(
        todos.map((todoToEdit) => todoToEdit.id === isEditing ? { ...todoToEdit, title: title } : todoToEdit)
      ));
      setIsEditing(null);
    } else {
      const newTodo = {
        id: Date.now(),
        title: title,
      };
      setTodos(prev => [...prev, newTodo]);
      localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
    }
    setTitle('');
  }
  // console.log('All our todos:', todos);
  const handleDelete = (id) => {
    // console.log(id);
    setTodos(todos.filter((todo) => todo.id !== id));
    localStorage.setItem('todos', JSON.stringify(todos.filter((todo) => todo.id !== id)));
  }

  const editHandler = (id, title) => {
    // console.log("id:", id);
    // console.log("title:", title);
    setTitle(title);
    setIsEditing(id);
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center mt-24 space-y-5'>
        <div className='space-x-3 '>
          <input type="text" placeholder='Enter a todo event' className='border border-blue-300 w-[360px] h-10 px-2' value={title} onChange={(event) => { setTitle(event.target.value) }} />
          <button onClick={() => addTodo()} type='button' className='w-16 h-10 text-white bg-blue-500 border border-blue-500 rounded-lg border-solid-2'>{isEditing ? "Update" : "Add"}</button>
        </div>

        <div className='space-y-5'>
          <h1 className='text-2xl font-bold text-left underline'>Todo List</h1>

          <div className='flex flex-col space-y-2'>
            {todos.map((data) => (
              <TodoListItem title={data.title}
                key={data.id}
                handleDelete={() => handleDelete(data.id)}
                editHandler={() => editHandler(data.id, data.title)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
