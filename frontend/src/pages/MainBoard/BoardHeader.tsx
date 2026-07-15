

function BoardHeader(){

    return(
        <>
            <div className="border-t border-[rgb(100,86,169)] flex justify-between px-6 py-3 h-14 bg-gradient-to-r from-[rgb(84,71,151)] to-[rgb(121,78,147)] text-white">
                <div className="flex gap-5 items-center">
                    <h1 className="font-semibold tracking-wide">My Trello Board</h1>

                    <div className="flex items-center">
                        <i className='bx bx-library text-lg' ></i>
                        <i className='bx bx-chevron-down text-3xl' ></i>
                    </div>
                </div>

                <div className="flex gap-2 items-center text-2xl">
                    <div className="hidden lg:flex justify-center items-center h-6 w-6 text-sm bg-amber-500 text-black rounded-full">K</div>

                    <div className="hidden border-0 lg:flex justify-center items-center w-[32px] aspect-square rounded">
                        <i className='bx bx-plug' ></i>
                    </div>

                    <div className="hidden border-0 lg:flex justify-center items-center w-[32px] aspect-square rounded">
                        <i className='bx bxs-zap' ></i>
                    </div>

                    <div className="border-0 flex justify-center items-center w-[32px] aspect-square rounded">
                        <i className='bx bx-filter' ></i>
                    </div>

                    <div className="hidden border-0 md:flex justify-center items-center w-[32px] aspect-square rounded">
                        <i className='bx bx-star' ></i>
                    </div>

                    <div className="hidden border-0 md:flex justify-center items-center w-[32px] aspect-square rounded">
                        <i className='bx bx-lock' ></i>
                    </div>

                    <button className="hidden md:flex gap-1.5 px-3 py-1.5 items-center bg-white text-black rounded-sm">
                        <i className='bx bx-user-plus' ></i>
                        <p className="text-sm">Share</p>
                    </button>

                    <div className="border-0 flex justify-center items-center w-[32px] aspect-square rounded">
                        <i className='bx bx-dots-horizontal-rounded' ></i>
                    </div>

                </div>
            </div>
        </>
    );
};

export default BoardHeader;