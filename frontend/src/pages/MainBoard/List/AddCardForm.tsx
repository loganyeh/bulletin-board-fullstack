import type { SetStateAction } from "react";

type AddCardFormProps = {
    setTask: React.Dispatch<SetStateAction<string>>,
    setIsAddCard: React.Dispatch<SetStateAction<boolean>>,
    handleAddTask: () => Promise<void>,
};

function AddCardForm({ setTask, setIsAddCard, handleAddTask }: AddCardFormProps ){

    return(
        <>
            <div className="flex gap-2 flex-col justify-between py-2 bg-gray-100 rounded-xl shrink-0">
                <input onChange={(e) => setTask(e.target.value)} type="text" className="border border-gray-300 px-3 py-1 h-16 font-semibold bg-white rounded shadow-md" placeholder="Enter a title or paste a link"/>

                <div onClick={() => setIsAddCard(false)} className="flex gap-2 w-fit">
                    <button onClick={() => handleAddTask()} className="bg-[rgb(24,104,219)] px-2.5 py-1 text-white font-medium tracking-wide rounded-md hover:bg-[rgb(4,74,189)] cursor-pointer">Add card</button>
                    <div className="flex justify-center items-center rounded hover:bg-gray-300 cursor-pointer">
                        <i className='bx bx-x text-2xl text-gray-600' ></i>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AddCardForm;