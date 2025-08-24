
import TodoListItem from './Components/TodoListItem';

function App() {
  return (
    <>
      <div className='flex justify-center items-center mt-24 flex-col space-y-5'>
        <div className=' space-x-3'>
          <input type="text" placeholder='Enter a todo event' className='border border-blue-300 w-[360px] h-10 px-2' />
          <button type='button' className='border w-16 h-10 bg-blue-500 text-white rounded-lg border-solid-2 border-blue-500'>Add</button>
        </div>

        <div className='space-y-5'>
          <h1 className='text-2xl font-bold text-left underline'>Todo List</h1>

          <div className='flex flex-col space-y-2'>
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />

          </div>
        </div>
      </div>
    </>
  )
}

export default App
