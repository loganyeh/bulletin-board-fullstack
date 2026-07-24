import type { SetStateAction } from "react";
import { useState } from "react";

type EnterListNameProps = {
    setIsAddAnotherList: React.Dispatch<SetStateAction<boolean>>;
    getLists: () => Promise<void>;
};

function EnterListName({ setIsAddAnotherList, getLists }: EnterListNameProps ){
    const [title, setTitle] = useState("");

    async function createList(){
        await fetch("http://localhost:3000", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
            }),
        });

        getLists();
    };

    return(
        <>
            <div className="flex flex-col justify-between px-4 py-2 min-h-[88px] w-72 bg-gray-100 rounded-xl shrink-0">
                <input onChange={(e) => setTitle(e.target.value)} type="text" className="border px-3 py-1 font-semibold bg-white rounded" placeholder="Enter list name..."/>

                <div onClick={() => setIsAddAnotherList(false)} className="flex gap-2 w-fit">
                    <button onClick={async () => {await createList(); setTitle("")}} className="bg-[rgb(24,104,219)] px-2.5 py-1 text-white font-medium tracking-wide rounded-md hover:bg-[rgb(4,74,189)] cursor-pointer">Add list</button>
                    <div className="flex justify-center items-center rounded hover:bg-gray-300 cursor-pointer">
                        <i className='bx bx-x text-2xl text-gray-600' ></i>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EnterListName;