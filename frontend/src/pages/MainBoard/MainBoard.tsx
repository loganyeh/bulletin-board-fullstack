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

// type alias
type taskList = {
    _id: string,
    title: string, 
    tasks: string[],
};

function MainBoard(){
    const [isAddAnotherList, setIsAddAnotherList] = useState(false);
    const [board, setBoard] = useState<taskList[]>([]);

    async function getLists(){
        const res = await fetch(`http://localhost:3000/`);
        const data: taskList[] = await res.json();
        setBoard(data);
    };

    useEffect(() => {
        getLists();
    }, []);

    return(
        <>
            <div className="relative flex flex-col h-screen">
                <Header />
                <BoardHeader />

                {/* Body for Boards */}
                <div className="flex-1 flex items-start gap-3 p-3 bg-gradient-to-br from-[rgb(113,94,198)] to-[rgb(224,115,188)] overflow-x-scroll scrollbar-hide">
                    {board.map((list, index) => {
                        return <List key={index} getLists={getLists} listName={list.title} taskList={list.tasks} id={list._id} />
                    })}

                    {!isAddAnotherList ? 
                        <AddAnotherListBtn setIsAddAnotherList={setIsAddAnotherList} />
                        : 
                        <EnterListName setIsAddAnotherList={setIsAddAnotherList} getLists={getLists} />
                    }
                </div>

                <MobileNav />
                <FloatingNav />
            </div>
        </>
    );
};

export default MainBoard;