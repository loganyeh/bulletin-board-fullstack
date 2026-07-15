// imports
import { useState } from "react";

// components
import Header from "./Header";
import BoardHeader from "./BoardHeader";
import MobileNav from "./MobileNav";
import FloatingNav from "./FloatingNav";
import AddAnotherListBtn from "./AddAnotherListBtn";
import AddListCardForm from "./EnterListName";
import List from "./List";

function MainBoard(){
    const [isAddAnotherList, setIsAddAnotherList] = useState(false);

    return(
        <>
            <div className="relative flex flex-col h-screen">
                <Header />
                <BoardHeader />

                {/* Body for Boards */}
                <div className="flex-1 flex items-start gap-3 p-3 bg-gradient-to-br from-[rgb(113,94,198)] to-[rgb(224,115,188)] overflow-x-scroll scrollbar-hide">
                    <List />

                    {!isAddAnotherList ? 
                        <AddAnotherListBtn setIsAddAnotherList={setIsAddAnotherList} />
                        : 
                        <AddListCardForm setIsAddAnotherList={setIsAddAnotherList} />
                    }
                </div>

                <MobileNav />
                <FloatingNav />
            </div>
        </>
    );
};

export default MainBoard;