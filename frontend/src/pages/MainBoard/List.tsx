import { useState } from "react";
import type { Task } from "./MainBoard";

type ListProps = {
    getLists: () => Promise<void>;
    listName: string,
    taskList?: Task[],
    id: string,
};

function List({ getLists, listName, taskList = [], id }: ListProps ){
    const [isAddCard, setIsAddCard] = useState(false);
    const [isListActions, setIsListActions] = useState(false);
    const [task, setTask] = useState("");
    const listActions = [
        "Add card", 
        "Copy list", 
        "Move list", 
        "Watch", 
    ];
    const automation = [
        "When a card is added to the list", 
        "Every day, sort list by", 
        "Every Monday, sort list by", 
        "Create a rule"
    ];

    async function deleteList(){
        await fetch(`http://localhost:3000/${id}`, {
            method: "DELETE",
        });

        await getLists();
    };

    async function addTask(task: string){
        await fetch(`http://localhost:3000/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                task: task
            }),
        });

        setTask("");
        getLists();
    };

    async function deleteTask(listID: string, taskId: string){
        await fetch(`http://localhost:3000/${listID}/task/${taskId}`, {
            method: "DELETE",
        });

        getLists();
    };

    async function flipCompleted(listID: string, taskID: string){
        await fetch(`http://localhost:3000/${listID}/task/${taskID}`, {
            method: "PATCH",
        });

        getLists();
    };
    
    return(
        <>
            <div className="flex gap-3 flex-col justify-between px-4 py-2 min-h-[88px] w-72 bg-gray-100 rounded-xl shrink-0">
                {/* List Header and Name and List Actions */}
                <div className="flex justify-between">
                    <h2 className="font-medium">{listName}</h2>

                    <div className="flex gap-2 items-center text-gray-600">
                        <p>{taskList.length}</p>
                        <div className="relative flex justify-center items-center rounded hover:bg-gray-300">
                            <i onClick={() => setIsListActions((prev) => !prev)} className='bx bx-dots-horizontal-rounded p-1 text-xl cursor-pointer' ></i>
                            {isListActions && <div className="border border-gray-300 absolute top-full left-0 mt-2 px-3 w-72 bg-white rounded-lg shadow-md">
                                <div className="border-b flex gap-2 flex-col py-3">
                                    <div className="relative flex justify-end items-center">
                                        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-semibold whitespace-nowrap">List actions</p>
                                        <i onClick={() => setIsListActions((prev) => !prev)} className='bx bx-x text-2xl hover:bg-gray-300 rounded-lg cursor-pointer'></i>
                                    </div>

                                    <div className="flex gap-2.5 flex-col">
                                        {listActions.map((action, index) => {
                                            return <div key={index} className="text-sm whitespace-nowrap">
                                                {action}
                                            </div>
                                        })}
                                    </div>
                                </div>

                                <div className="border-b pb-3">
                                    <div className="flex justify-between items-center py-3">
                                        <p className="text-sm font-semibold">Automation</p>
                                        <i className='bx bx-chevron-up text-2xl' ></i>
                                    </div>

                                    <div className="flex gap-2.5 flex-col">
                                        {automation.map((automation, index) => {
                                            return <div key={index} className="text-sm">
                                                {automation}
                                            </div>
                                        })}
                                    </div>
                                </div>

                                <p onClick={() => {deleteList(); setIsListActions(false)}} className="text-sm my-3 hover:bg-gray-300 cursor-pointer">Archive this list</p>

                            </div>}
                        </div>
                    </div>
                </div>

                {/* TO DO TASKS */}
                {taskList.length > 0 && <div className="flex gap-2 flex-col font-light tracking-wide">
                    {taskList.map((task, index) => {
                        return <div key={index} className="relative flex border border-gray-200 px-3 py-1.5 bg-white rounded-lg shadow-md cursor-pointer group hover:border-2 hover:border-blue-600">
                            <div className={`border absolute top-1/2 -translate-y-1/2 flex justify-center items-center h-4 w-4 group-hover:flex opacity-0 transition-opacity duration-350 group-hover:opacity-100 rounded-full ${task.completed ? "opacity-100" : ""}`}>
                                <i onClick={() => flipCompleted(id, task._id)} className={`bx bx-check ${task.completed ? "text-green-500 hover:text-red-600" : "text-black hover:text-green-500"}`}></i>
                            </div>
                            <p className={`transition-transform duration-600 group-hover:translate-x-5 ${task.completed ? "translate-x-5" : ""}`}>{task.task}</p>
                            <div className="hidden absolute right-2 top-1/2 -translate-y-1/2 group-hover:flex">
                                <i onClick={() => deleteTask(id, task._id)} className='bx bx-trash text-xl text-gray-700 hover:text-red-600'></i>
                                {/* <i onClick={() => deleteTask(id, task._id)} className='bx bx-edit text-xl text-gray-700'></i> */}
                            </div>
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
                            <button onClick={() => addTask(task)} className="bg-[rgb(24,104,219)] px-2.5 py-1 text-white font-medium tracking-wide rounded-md hover:bg-[rgb(4,74,189)] cursor-pointer">Add card</button>
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