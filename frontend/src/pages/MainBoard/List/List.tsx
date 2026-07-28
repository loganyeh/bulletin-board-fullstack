// import state
import { useState } from "react";
import type { Task } from "../MainBoard";

// import service
import { deleteList, addTask, deleteTask, 
    toggleComplete, updateTask } 
    from "../../../services/backend/boardService";

// import comps
import ListHeader from "./ListHeader";
import AllTasks from "./AllTasks";
import AddACardBtn from "./AddACardBtn";
import AddCardForm from "./AddCardForm";

// type alias
type ListProps = {
    handleGetLists: () => Promise<void>;
    listName: string,
    taskList: Task[],
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
        await handleGetLists();
    };

    async function handleDeleteTask(taskID: string){
        await deleteTask(listID, taskID);
        await handleGetLists();
    };

    async function handleToggleComplete(taskID: string){
        await toggleComplete(listID, taskID);
        await handleGetLists();
    };

    async function handleUpdateTask(taskID: string){
        await updateTask(listID, taskID, updatedTask);
        setUpdatedTask("");
        await handleGetLists();
    };

    return(
        <>
            <div className="flex gap-3 flex-col justify-between px-4 py-2 min-h-[88px] w-72 bg-gray-100 rounded-xl shrink-0">
                {/* List Header and Name and List Actions */}
                <ListHeader listName={listName} taskList={taskList} isListActions={isListActions} setIsListActions={setIsListActions} handleDeleteList={handleDeleteList} />

                {/* List of TASKS */}
                {taskList.length > 0 && <AllTasks taskList={taskList} 
                    editingTaskId={editingTaskId} setEditingTaskId={setEditingTaskId} 
                    handleDeleteTask={handleDeleteTask} handleToggleComplete={handleToggleComplete} 
                    handleUpdateTask={handleUpdateTask} setUpdatedTask={setUpdatedTask} 
                  />
                }

                {/* Add Task Button & Form */}
                {!isAddCard ? 
                    <AddACardBtn setIsAddCard={setIsAddCard} />
                    :
                    <AddCardForm setTask={setTask} setIsAddCard={setIsAddCard} handleAddTask={handleAddTask} />
                }
            </div>
        </>
    );
};

export default List;