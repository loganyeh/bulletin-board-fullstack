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
    listName: string,
    taskList: Task[],
    listID: string,
    addTaskToBoard: (listID: string, newTask: Task) => void;
    deleteTaskFromBoard: (listID: string, taskID: string) => void;
    deleteListFromBoard: (listID: string) => void;
    toggleTaskOnBoard: (listID: string, taskID: string) => void;
    updateTaskOnBoard: (listID: string, taskID: string, updatedTask: string) => void;
};

function List({ listName, taskList = [], listID, 
    addTaskToBoard, deleteTaskFromBoard, deleteListFromBoard,
    toggleTaskOnBoard, updateTaskOnBoard
    }: ListProps ){
    const [isAddCard, setIsAddCard] = useState(false);
    const [isListActions, setIsListActions] = useState(false);
    const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
    const [task, setTask] = useState("");
    const [updatedTask, setUpdatedTask] = useState("");

    async function handleDeleteList(){
        await deleteList(listID);
        deleteListFromBoard(listID);
    };

    async function handleAddTask(){
        const newTask = await addTask(listID, task);
        setTask("");
        addTaskToBoard(listID, newTask);
    };

    async function handleDeleteTask(taskID: string){
        await deleteTask(listID, taskID);
        deleteTaskFromBoard(listID, taskID);
    };

    async function handleToggleComplete(taskID: string){
        await toggleComplete(listID, taskID);
        toggleTaskOnBoard(listID, taskID);
    };

    async function handleUpdateTask(taskID: string){
        await updateTask(listID, taskID, updatedTask);
        setUpdatedTask("");
        updateTaskOnBoard(listID, taskID, updatedTask);
    };

    return(
        <>
            <div className="flex gap-3 flex-col justify-between px-4 py-2 min-h-[88px] w-72 bg-gray-100 rounded-xl shrink-0">
                {/* List Header and Name and List Actions */}
                <ListHeader listName={listName} taskList={taskList} isListActions={isListActions} setIsListActions={setIsListActions}
                handleDeleteList={handleDeleteList} />

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