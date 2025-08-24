import { Trash2, SquarePen } from 'lucide-react';
const TodoListItem = () => {
    return (
        <>
            <div className='border border-blue-300 w-[440px] p-2 rounded-lg flex justify-between items-center'>
                <p>Go to class 1</p>
                <div className='flex gap-2'>
                    <SquarePen size={15} color='blue' />
                    <Trash2 color='red' size={15} />
                </div>
            </div>
        </>
    );
};

export default TodoListItem;