// imports
import { useState, useEffect } from "react";

// components
import Header from "./Header";
import BoardHeader from "./BoardHeader";
import MobileNav from "./MobileNav";
import FloatingNav from "./FloatingNav";
import AddAnotherListBtn from "./AddAnotherListBtn";
import EnterListName from "./EnterListName";
import List from "./List";

// import services
import { getLists } from "../../services/backend/boardService";

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
    const [isAddAnotherList, setIsAddAnotherList] = useState(false);
    const [board, setBoard] = useState<taskList[]>([]);

    async function handleGetLists(){
        const data = await getLists();
        setBoard(data);
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
                    {board.map((list, index) => {
                        return <List key={index} handleGetLists={handleGetLists} listName={list.title} taskList={list.tasks} listID={list._id} />
                    })}

                    {!isAddAnotherList ? 
                        <AddAnotherListBtn setIsAddAnotherList={setIsAddAnotherList} />
                        : 
                        <EnterListName setIsAddAnotherList={setIsAddAnotherList} handleGetLists={handleGetLists} />
                    }
                </div>

                <MobileNav />
                <FloatingNav />
            </div>
        </>
    );
};

export default MainBoard;