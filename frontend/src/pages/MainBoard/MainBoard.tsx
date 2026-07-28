// imports
import { useState, useEffect } from "react";

// components
import Header from "./Header";
import BoardHeader from "./BoardHeader";
import MobileNav from "./MobileNav";
import FloatingNav from "./FloatingNav";
import AddAnotherListBtn from "./AddAnotherListBtn";
import EnterListName from "./EnterListName";
import List from "./List/List";

// import services
import { getLists } from "../../services/backend/boardService";
import ListSkeleton from "./ListSkeleton";

// type alias
export type Task = {
    _id: string
    task: string,
    completed: boolean,
};

export type taskList = {
    _id: string,
    title: string, 
    tasks: Task[],
};

function MainBoard(){
    const [loading, setLoading] = useState(false);
    const [isAddAnotherList, setIsAddAnotherList] = useState(false);
    const [board, setBoard] = useState<taskList[]>([]);

    async function handleGetLists(){
        setLoading(true);
        const data = await getLists();
        setBoard(data);
        setLoading(false);
    };

    function addTaskToBoard(listID: string, newTask: Task) {
        setBoard(prev =>
            prev.map(list =>
                list._id === listID
                    ? 
                        {
                            ...list,
                            tasks: [...list.tasks, newTask]
                        }
                    : 
                        list
            )
        );
    };

    function deleteTaskFromBoard(listID: string, taskID: string){
        setBoard(prev =>
            prev.map(list =>
                list._id === listID
                    ? {
                        ...list,
                        tasks: list.tasks.filter(
                            task => task._id !== taskID
                        )
                    }
                    : list
            )
        );
    };

    function addListToBoard(newList: taskList){
        setBoard(prev => [
            ...prev,
            newList
        ])
    };

    function deleteListFromBoard(listID: string){
        setBoard(prev =>
            prev.filter(list => list._id !== listID)
        );    
    };

    function toggleTaskOnBoard(listID: string, taskID: string){
        setBoard(prev =>
            prev.map(list =>
                list._id === listID
                    ? {
                        ...list,
                        tasks: list.tasks.map(task =>
                            task._id === taskID
                                ? {
                                    ...task,
                                    completed: !task.completed
                                }
                                : task
                        )
                    }
                    : list
            )
        );
    };

    function updateTaskOnBoard(listID: string, taskID: string, updatedTask: string){
        setBoard(prev =>
            prev.map(list =>
                list._id === listID
                    ? {
                        ...list,
                        tasks: list.tasks.map(task =>
                            task._id === taskID
                                ? {
                                    ...task,
                                    task: updatedTask
                                }
                                : task
                        )
                    }
                    : list
            )
        );
    };

    useEffect(() => {
        handleGetLists();
    }, []);

    return(
        <>
            <div className="relative flex flex-col h-screen">
                <Header />
                <BoardHeader />

                {/* Body for Boards */}
                <div className="flex-1 flex items-start gap-3 p-3 bg-gradient-to-br from-[rgb(113,94,198)] to-[rgb(224,115,188)] overflow-x-scroll scrollbar-hide">
                    {loading ? 
                        (
                            <>
                                {Array.from({ length: 2 }).map((_, index) => {
                                    return <ListSkeleton key={index} />
                                })}

                                <div className="flex justify-start items-center px-3 py-2 h-full max-h-[44px] w-68 bg-white/30 text-white rounded-xl shrink-0">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-1.5 items-center">
                                            <i className='bx bx-plus text-xl' ></i>
                                            <p className="font-medium">Add another list</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                        :
                        (
                            <>
                                {board.map((list, index) => {
                                    return <List key={index} handleGetLists={handleGetLists} 
                                    listName={list.title} taskList={list.tasks} listID={list._id} 
                                    addTaskToBoard={addTaskToBoard} deleteTaskFromBoard={deleteTaskFromBoard}
                                    deleteListFromBoard={deleteListFromBoard} toggleTaskOnBoard={toggleTaskOnBoard}
                                    updateTaskOnBoard={updateTaskOnBoard}
                                    />
                                })}

                                {!isAddAnotherList ? 
                                    <AddAnotherListBtn setIsAddAnotherList={setIsAddAnotherList} />
                                    : 
                                    <EnterListName setIsAddAnotherList={setIsAddAnotherList} handleGetLists={handleGetLists} addListToBoard={addListToBoard} />
                                }
                            </>
                        )
                    }
                </div>


                <MobileNav />
                <FloatingNav />
            </div>
        </>
    );
};

export default MainBoard;