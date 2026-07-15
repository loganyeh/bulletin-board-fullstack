import type { SetStateAction } from "react";

type EnterListNameProps = {
    setIsAddAnotherList: React.Dispatch<SetStateAction<boolean>>;
};

function EnterListName({ setIsAddAnotherList }: EnterListNameProps ){

    return(
        <>
            <div className="flex flex-col justify-between px-4 py-2 min-h-[88px] w-72 bg-gray-100 rounded-xl shrink-0">
                <input type="text" className="border px-3 py-1 font-semibold bg-white rounded" placeholder="Enter list name..."/>

                <div onClick={() => setIsAddAnotherList(false)} className="flex gap-2 w-fit">
                    <button className="bg-[rgb(24,104,219)] px-2.5 py-1 text-white font-medium tracking-wide rounded-md hover:bg-[rgb(4,74,189)] cursor-pointer">Add list</button>
                    <div className="flex justify-center items-center rounded hover:bg-gray-300 cursor-pointer">
                        <i className='bx bx-x text-2xl text-gray-600' ></i>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EnterListName;