import React, { type SetStateAction } from "react";

type AddAnotherListBtnProps = {
    setIsAddAnotherList: React.Dispatch<SetStateAction<boolean>>;
};

function AddAnotherListBtn({ setIsAddAnotherList }: AddAnotherListBtnProps ){

    return(
        <>
            <div onClick={() => setIsAddAnotherList(true)} className="flex justify-start items-center px-3 py-2 h-full max-h-[44px] w-68 bg-white/30 text-white rounded-xl shrink-0 hover:bg-white/20 cursor-pointer">
                <div className="flex justify-between items-center">
                    <div className="flex gap-1.5 items-center">
                        <i className='bx bx-plus text-xl' ></i>
                        <p className="font-medium">Add another list</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddAnotherListBtn;