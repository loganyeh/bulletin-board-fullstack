// import state
import { useState } from "react";
import type { Task } from "../MainBoard";

// import service
import { deleteList, addTask, deleteTask, 
    toggleComplete, updateTask } 
    from "../../../services/backend/boardService";

// import comps
import ListHeader from "./ListHeader";

// type alias
type ListProps = {
    handleGetLists: () => Promise<void>;
    listName: string,
    taskList?: Task[],
    listID: string,
};

function List({ handleGetLists, listName, taskList = [], listID }: ListProps ){
    const [isAddCard, setIsAddCard] = useState(false);
    const [isListActions, setIsListActions] = useState(false);
    const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
    const [task, setTask] = useState("");
    const [updatedTask, setUpdatedTask] = useState("");
    

    async function handleDeleteList(){
        await deleteList(listID);
        await handleGetLists();
    };

    async function handleAddTask(){
        await addTask(listID, task);
        setTask("");
        handleGetLists();
    };

    async function handleDeleteTask(taskID: string){
        await deleteTask(listID, taskID);
        handleGetLists();
    };

    async function handleToggleComplete(taskID: string){
        await toggleComplete(listID, taskID);
        handleGetLists();
    };

    async function handleUpdateTask(taskID: string){
        await updateTask(listID, taskID, updatedTask);
        setUpdatedTask("");
        handleGetLists();
    };

    return(
        <>
            <div className="flex gap-3 flex-col justify-between px-4 py-2 min-h-[88px] w-72 bg-gray-100 rounded-xl shrink-0">
                {/* List Header and Name and List Actions */}
                {/* <ListHeader listName={listName} /> */}

                {/* List of TASKS */}
                {taskList.length > 0 && <div className="flex gap-2 flex-col font-light tracking-wide">
                    {taskList.map((task, index) => {
                        return <div key={index} className={`border border-gray-200 relative flex px-3 py-1.5 bg-white rounded-lg shadow-md cursor-pointer group ${editingTaskId === task._id ? "" : "hover:border-2 hover:border-blue-600"}`}>
                        {/* return <div key={index} className={`border border-gray-200 relative flex px-3 py-1.5 bg-white rounded-lg shadow-md cursor-pointer ${ editingTaskId !== task._id ? "group hover:border-2 hover:border-blue-600" : "" }`}> */}
                            {/* Check Mark */}
                            <div onClick={() => handleToggleComplete(task._id)} className={`${task.completed && editingTaskId !== task._id ? "bg-[rgb(106,154,35)] opacity-100 hover:bg-[rgb(126,174,55)]" : "opacity-0"} 
                            ${editingTaskId === task._id ? "" : "border"} absolute top-1/2 -translate-y-1/2 flex justify-center items-center h-4 w-4 rounded-full
                            group-hover:flex  
                            transition-opacity duration-350 group-hover:opacity-100
                            transition-transform active:scale-[0.85]
                            `}>
                                <i className="bx bx-check text-white"></i>
                            </div>

                            {/* Task Name */}
                            {editingTaskId === task._id ? 
                                <div className="flex gap-2 flex-col w-full">
                                    <div onInput={(e) => setUpdatedTask(e.currentTarget.textContent || "")} contentEditable="true" suppressContentEditableWarning className="border border-gray-400 h-full px-2 py-1 min-h-20 rounded-lg">
                                        {task.task}
                                    </div>

                                    <button onClick={async () => {await handleUpdateTask(task._id); setEditingTaskId(editingTaskId === task._id ? null : task._id)}} className="border px-2 py-0.5 w-fit bg-blue-500 text-white rounded-lg hover:bg-blue-700 active:bg-blue-600 cursor-pointer">Save</button>
                                </div>
                                :
                                <div className={`${task.completed ? "translate-x-6" : "transition-transform duration-600 group-hover:translate-x-6"}`}>
                                    {task.task}
                                </div>
                            }

                            {/* Delete */}
                            {/* <div className="hidden absolute right-2 top-1/2 -translate-y-1/2 hover:flex"> */}
                            {editingTaskId !== task._id && <div className="hidden absolute right-2 top-1/2 -translate-y-1/2 group-hover:flex gap-1">
                                <i onClick={() => handleDeleteTask(task._id)} className='bx bx-trash text-xl text-gray-700 
                                hover:text-red-600 active:text-red-500
                                transition-transform active:scale-[0.85]
                                '></i>
                                <i onClick={() => {setEditingTaskId(editingTaskId === task._id ? null : task._id); setUpdatedTask(task.task)}} className='bx bx-edit text-xl hover:text-blue-400' ></i>
                            </div>}

                        </div>
                    })}
                </div>}

                {/* Add Task Button & Form */}
                {!isAddCard ? 
                    <div onClick={() => setIsAddCard(prev => !prev)} className="flex gap-4 justify-between items-center text-gray-600">
                        <div className="flex-1 flex gap-1.5 items-center py-1 rounded hover:bg-[rgb(209,210,212)] cursor-pointer">
                            <i className='bx bx-plus text-xl' ></i>
                            <p className="font-medium">Add a card</p>
                        </div>

                        <i className='bx bx-layer-plus text-xl'></i>
                    </div>
                    :
                    <div className="flex gap-2 flex-col justify-between py-2 bg-gray-100 rounded-xl shrink-0">
                        <input onChange={(e) => setTask(e.target.value)} type="text" className="border border-gray-300 px-3 py-1 h-16 font-semibold bg-white rounded shadow-md" placeholder="Enter a title or paste a link"/>

                        <div onClick={() => setIsAddCard(false)} className="flex gap-2 w-fit">
                            <button onClick={() => handleAddTask()} className="bg-[rgb(24,104,219)] px-2.5 py-1 text-white font-medium tracking-wide rounded-md hover:bg-[rgb(4,74,189)] cursor-pointer">Add card</button>
                            <div className="flex justify-center items-center rounded hover:bg-gray-300 cursor-pointer">
                                <i className='bx bx-x text-2xl text-gray-600' ></i>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    );
};

export default List;