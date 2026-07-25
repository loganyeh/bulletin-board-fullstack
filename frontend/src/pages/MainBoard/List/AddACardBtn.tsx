import type { SetStateAction } from "react";

type AddACardBtnProps = {
    setIsAddCard: React.Dispatch<SetStateAction<boolean>>,
};

function AddACardBtn({ setIsAddCard }: AddACardBtnProps ){

    return(
        <>
            <div onClick={() => setIsAddCard(prev => !prev)} className="flex gap-4 justify-between items-center text-gray-600">
                <div className="flex-1 flex gap-1.5 items-center py-1 rounded hover:bg-[rgb(209,210,212)] cursor-pointer">
                    <i className='bx bx-plus text-xl' ></i>
                    <p className="font-medium">Add a card</p>
                </div>

                <i className='bx bx-layer-plus text-xl'></i>
            </div>
        </>
    );
};

export default AddACardBtn;