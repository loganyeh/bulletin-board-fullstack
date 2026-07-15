import { useState } from "react";

type ListProps = {
    listName: string,
    taskList?: string[],
};

function List({ listName, taskList = [] }: ListProps ){
    const [isAddCard, setIsAddCard] = useState(false);
    
    return(
        <>
            <div className="flex gap-3 flex-col justify-between px-4 py-2 min-h-[88px] w-72 bg-gray-100 rounded-xl shrink-0">
                <div className="flex justify-between">
                    <h2 className="font-medium">{listName}</h2>

                    <div className="flex gap-2 items-center text-gray-600">
                        <p>{taskList.length}</p>
                        <i className='bx bx-dots-horizontal-rounded text-xl' ></i>
                    </div>
                </div>

                <div className="flex gap-2 flex-col font-light tracking-wide">
                    {taskList.length > 0 && taskList.map((_, index) => {
                        return <div key={index} className="border border-gray-200 px-2 py-1 bg-white rounded-lg shadow-md">
                            Test {index + 1} 
                        </div>
                    })}
                </div>

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