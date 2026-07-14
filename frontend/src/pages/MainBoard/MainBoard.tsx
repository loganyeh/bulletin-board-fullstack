

function MainBoard(){
    const bottomNav = ['bx bxs-inbox', 'bx bx-calendar-alt', 'bx bx-bookmark']

    return(
        <>
            <div className="flex flex-col h-screen">
                {/* Header */}
                <div className="flex justify-between p-3 h-12">
                    <div className="flex gap-3 items-center">
                        <i className='bx bx-grid-alt text-xl'></i>
                        <img src="https://i.pinimg.com/736x/39/f7/a2/39f7a27eb136d5b317ef2b5c093f8c9e.jpg" alt="logo.png" className="w-[28px] aspect-square" />
                    </div>

                    <div className="flex gap-3 items-center">
                        <i className='bx bx-search text-xl' ></i>
                        <button className="border px-3 py-1 font-medium rounded">Create</button>
                    </div>

                    <div className="flex items-center">
                        <i className='bx bx-dots-horizontal-rounded text-2xl' ></i>
                    </div>
                </div>

                {/* Bulletin Board Nav */}
                <div className="border-y border-gray-300 flex justify-between px-5 py-3 h-14">
                    <div className="flex gap-4 items-center">
                        <h1 className="font-semibold tracking-wide">My Trello Board</h1>

                        <div className="flex items-center">
                            <i className='bx bx-bookmark text-lg' ></i>
                            <i className='bx bx-chevron-down text-3xl' ></i>
                        </div>
                    </div>

                    <div className="flex gap-2 text-2xl">
                        <div className="border flex justify-center items-center w-[32px] aspect-square rounded">
                            <i className='bx bx-filter' ></i>
                        </div>

                        <div className="border flex justify-center items-center w-[32px] aspect-square rounded">
                            <i className='bx bx-dots-horizontal-rounded' ></i>
                        </div>

                    </div>
                </div>

                {/* Body for Boards */}
                <div className="border border-gray-300 flex-1 flex items-start gap-3 p-3 overflow-x-scroll">
                    {Array.from({ length: 1 }).map((_, index) => {
                        return <div key={index} className="border flex gap-3 flex-col justify-between px-4 py-2 min-h-[88px] w-68 rounded-xl shrink-0">
                            <div className="flex justify-between">
                                <h2 className="font-medium">Later</h2>

                                <div className="flex gap-2 items-center">
                                    <p>0</p>
                                    <i className='bx bx-dots-horizontal-rounded text-xl' ></i>
                                </div>
                            </div>

                            <div className="flex gap-2 flex-col tracking-wide">
                                {Array.from({ length: 3 }).map((_, index) => {
                                    return <div key={index} className="border px-2 py-1 rounded-lg">
                                        Test {index + 1} 
                                    </div>
                                })}
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="flex gap-1.5 items-center">
                                    <i className='bx bx-plus text-xl' ></i>
                                    <p className="font-medium">Add a card</p>
                                </div>

                                <i className='bx bx-layer-plus text-xl'></i>
                            </div>

                        </div>
                    })}

                    <div className="border flex flex-col justify-between px-4 py-2 h-full max-h-[88px] w-68 rounded-xl shrink-0">
                        <div className="flex justify-between">
                            <h2 className="font-medium">Later</h2>

                            <div className="flex gap-2 items-center">
                                <p>0</p>
                                <i className='bx bx-dots-horizontal-rounded text-xl' ></i>
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex gap-1.5 items-center">
                                <i className='bx bx-plus text-xl' ></i>
                                <p className="font-medium">Add a card</p>
                            </div>

                            <i className='bx bx-layer-plus text-xl'></i>
                        </div>
                    </div>

                    {/* Add another list button */}
                    <div className="border flex justify-start items-center px-3 py-2 h-full max-h-[44px] w-68 rounded-xl shrink-0">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-1.5 items-center">
                                <i className='bx bx-plus text-xl' ></i>
                                <p className="font-medium">Add another list</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Nav */}
                <div className="flex gap-2 p-2.5 h-16">
                    <div className="grid gap-2 grid-cols-3 w-10/12">
                        {bottomNav.map((nav, index) => {
                            return <div key={index} className={`${index === 0 ? "border" : ""} flex justify-center items-center rounded-lg`}>
                                <i className={`${nav} text-lg`} ></i>
                            </div>
                        })}
                    </div>

                    <div className="border-l flex-1 flex justify-center items-center">
                        <i className='bx bx-bookmarks text-lg'></i>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default MainBoard;