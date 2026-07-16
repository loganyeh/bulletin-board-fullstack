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
    title: string, 
    tasks: [
        {
            task: string,
        },
    ],
};

function MainBoard(){
    const [isAddAnotherList, setIsAddAnotherList] = useState(false);
    const [board, setBoard] = useState();

    return(
        <>
            <div className="relative flex flex-col h-screen">
                <Header />
                <BoardHeader />

                {/* Body for Boards */}
                <div className="flex-1 flex items-start gap-3 p-3 bg-gradient-to-br from-[rgb(113,94,198)] to-[rgb(224,115,188)] overflow-x-scroll scrollbar-hide">
                    <List listName="Today" taskList={["Test 1", "Test 2"]} />
                    {/* <List listName="Tomorrow" /> */}

                    {!isAddAnotherList ? 
                        <AddAnotherListBtn setIsAddAnotherList={setIsAddAnotherList} />
                        : 
                        <EnterListName setIsAddAnotherList={setIsAddAnotherList} />
                    }
                </div>

                <MobileNav />
                <FloatingNav />
            </div>
        </>
    );
};

export default MainBoard;