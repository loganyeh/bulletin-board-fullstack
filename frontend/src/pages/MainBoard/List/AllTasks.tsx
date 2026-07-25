import type { SetStateAction } from "react";
import type { Task } from "../MainBoard";

type TasksProp = {
    taskList: Task[],
    editingTaskId: string | null,
    setEditingTaskId: React.Dispatch<SetStateAction<string | null>>,
    handleDeleteTask: (id: string) => Promise<void>,
    handleToggleComplete: (task_id: string) => Promise<void>,
    handleUpdateTask: (id: string) => Promise<void>,
    setUpdatedTask: React.Dispatch<SetStateAction<string>>,
};
 
function AllTasks({  
    taskList, editingTaskId, setEditingTaskId,  
    handleDeleteTask, handleToggleComplete, handleUpdateTask, 
    setUpdatedTask
 }: TasksProp ){
    
    return(
        <>
            <div className="flex gap-2 flex-col font-light tracking-wide">
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
            </div>
        </>
    );
};

export default AllTasks;