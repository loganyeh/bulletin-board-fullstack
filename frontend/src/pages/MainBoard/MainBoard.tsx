

function MainBoard(){
    const bottomNav = ['bx bxs-inbox', 'bx bx-calendar-alt', 'bx bx-bookmark'];
    const boardNames = ["This Week", "Later"];

    return(
        <>
            <div className="flex flex-col h-screen">
                {/* Header */}
                <div className=" flex justify-between p-3 h-12 bg-[rgb(71,54,153)] text-white">
                    <div className="flex gap-3 items-center">
                        <i className='bx bx-grid-alt text-xl'></i>
                        <i className='bx bxl-trello text-3xl'></i>
                    </div>

                    <div className="flex gap-3 items-center">
                        <i className='bx bx-search text-xl' ></i>
                        <button className="px-3 py-1 font-medium bg-[rgb(108,94,173)] rounded">Create</button>
                    </div>

                    <div className="flex items-center">
                        <i className='bx bx-dots-horizontal-rounded text-2xl' ></i>
                    </div>
                </div>

                {/* Bulletin Board Nav */}
                <div className="border-t border-[rgb(100,86,169)] flex justify-between px-5 py-3 h-14 bg-gradient-to-r from-[rgb(84,71,151)] to-[rgb(121,78,147)] text-white">
                    <div className="flex gap-4 items-center">
                        <h1 className="font-semibold tracking-wide">My Trello Board</h1>

                        <div className="flex items-center">
                            <i className='bx bx-library text-lg' ></i>
                            <i className='bx bx-chevron-down text-3xl' ></i>
                        </div>
                    </div>

                    <div className="flex gap-2 text-2xl">
                        <div className="border-0 flex justify-center items-center w-[32px] aspect-square rounded">
                            <i className='bx bx-filter' ></i>
                        </div>

                        <div className="border-0 flex justify-center items-center w-[32px] aspect-square rounded">
                            <i className='bx bx-dots-horizontal-rounded' ></i>
                        </div>

                    </div>
                </div>

                {/* Body for Boards */}
                <div className="flex-1 flex items-start gap-3 p-3 bg-gradient-to-br from-[rgb(113,94,198)] to-[rgb(224,115,188)] overflow-x-scroll scrollbar-hide">
                    {/* Today */}
                    {Array.from({ length: 1 }).map((_, index) => {
                        return <div key={index} className="flex gap-3 flex-col justify-between px-4 py-2 min-h-[88px] w-68 bg-gray-100 rounded-xl shrink-0">
                            <div className="flex justify-between">
                                <h2 className="font-medium">Today</h2>

                                <div className="flex gap-2 items-center text-gray-600">
                                    <p>3</p>
                                    <i className='bx bx-dots-horizontal-rounded text-xl' ></i>
                                </div>
                            </div>

                            <div className="flex gap-2 flex-col font-light tracking-wide">
                                {Array.from({ length: 3 }).map((_, index) => {
                                    return <div key={index} className="border border-gray-200 px-2 py-1 bg-white rounded-lg shadow-md">
                                        Test {index + 1} 
                                    </div>
                                })}
                            </div>

                            <div className="flex justify-between items-center text-gray-600">
                                <div className="flex gap-1.5 items-center">
                                    <i className='bx bx-plus text-xl' ></i>
                                    <p className="font-medium">Add a card</p>
                                </div>

                                <i className='bx bx-layer-plus text-xl'></i>
                            </div>

                        </div>
                    })}

                    {/* This Week & Later */}
                    {/* {Array.from({ length: 2 }).map((_, index) => { */}
                    {boardNames.map((name, index) => {
                        return <div key={index} className="flex gap-3 flex-col justify-between px-4 py-2 min-h-[88px] w-68 bg-gray-100 rounded-xl shrink-0">
                            <div className="flex justify-between">
                                <h2 className="font-medium">{name}</h2>

                                <div className="flex gap-2 items-center text-gray-600">
                                    <p>3</p>
                                    <i className='bx bx-dots-horizontal-rounded text-xl' ></i>
                                </div>
                            </div>

                            <div className="flex gap-2 flex-col font-light tracking-wide">
                                {Array.from({ length: 0 }).map((_, index) => {
                                    return <div key={index} className="border border-gray-200 px-2 py-1 bg-white rounded-lg shadow-md">
                                        Test {index + 1} 
                                    </div>
                                })}
                            </div>

                            <div className="flex justify-between items-center text-gray-600">
                                <div className="flex gap-1.5 items-center">
                                    <i className='bx bx-plus text-xl' ></i>
                                    <p className="font-medium">Add a card</p>
                                </div>

                                <i className='bx bx-layer-plus text-xl'></i>
                            </div>

                        </div>
                    })}

                    {/* Add Another List button */}
                    <div className="flex justify-start items-center px-3 py-2 h-full max-h-[44px] w-68 bg-white/20 text-white rounded-xl shrink-0">
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
                            return <div key={index} className={`${index === 2 ? "bg-[rgb(207,225,253)] text-gray-600" : ""} flex justify-center items-center rounded-lg`}>
                                <div className={`${index === 2 ? "border-b-2 border-[rgb(24,104,219)]" : ""} flex items-center h-full`}>
                                    <i className={`${nav} text-lg`} ></i>
                                </div>
                            </div>
                        })}
                    </div>

                    <div className="border-l border-gray-300 flex-1 flex justify-center items-center">
                        <i className='bx bx-bookmarks text-lg'></i>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default MainBoard;