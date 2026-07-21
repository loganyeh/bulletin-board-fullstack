import { useState } from "react";

type ListProps = {
    getLists: () => Promise<void>;
    listName: string,
    taskList?: string[],
    id: string,
};

function List({ getLists, listName, taskList = [], id }: ListProps ){
    const [isAddCard, setIsAddCard] = useState(false);
    const [isListActions, setIsListActions] = useState(false);
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
    
    return(
        <>
            <div className="flex gap-3 flex-col justify-between px-4 py-2 min-h-[88px] w-72 bg-gray-100 rounded-xl shrink-0">
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

                                <p onClick={() => deleteList()} className="text-sm my-3 hover:bg-gray-300 cursor-pointer">Archive this list</p>

                            </div>}
                        </div>
                    </div>
                </div>

                {taskList.length > 0 && <div className="flex gap-2 flex-col font-light tracking-wide">
                    {taskList.map((_, index) => {
                        return <div key={index} className="border border-gray-200 px-2 py-1 bg-white rounded-lg shadow-md">
                            Test {index + 1} 
                        </div>
                    })}
                </div>}

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
                        <input type="text" className="border border-gray-300 px-3 py-1 h-16 font-semibold bg-white rounded shadow-md" placeholder="Enter a title or paste a link"/>

                        <div onClick={() => setIsAddCard(false)} className="flex gap-2 w-fit">
                            <button className="bg-[rgb(24,104,219)] px-2.5 py-1 text-white font-medium tracking-wide rounded-md hover:bg-[rgb(4,74,189)] cursor-pointer">Add card</button>
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