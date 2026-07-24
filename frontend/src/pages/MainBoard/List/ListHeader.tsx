// import
import type { Task } from "../MainBoard";

type ListHeaderProps = {
    listName: string,
    taskList: Task[]
}

function ListHeader({ listName, taskList }: ListHeaderProps ){
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

    return(
        <>
            <div className="border flex justify-between">
                <h2 className="font-medium">{listName}</h2>

                <div className="flex gap-2 items-center text-gray-600">
                    {/* Num of Tasks */}
                    <p>{taskList.length}</p>
                    {/* List Actions Menu */}
                    <div className="relative z-10 flex justify-center items-center rounded hover:bg-gray-300">
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

                            <p onClick={() => {handleDeleteList(); setIsListActions(false)}} className="text-sm my-3 hover:bg-gray-300 cursor-pointer">Archive this list</p>

                        </div>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListHeader;