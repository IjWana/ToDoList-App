import { Trash2, SquarePen } from 'lucide-react';
const TodoListItem = ({ title, handleDelete, editHandler }) => {
    return (
        <>
            <div className='border border-blue-300 w-[440px] p-2 rounded-lg flex justify-between items-center'>
                <p>{title}</p>
                <div className='flex gap-2'>
                    <SquarePen size={15} color='blue' className='cursor-pointer' onClick={editHandler} />
                    <Trash2 color='red' className='cursor-pointer' size={15} onClick={handleDelete} />
                </div>
            </div>
        </>
    );
};

export default TodoListItem;