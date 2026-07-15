

function MainBoard(){
    const bottomNav = ['bx bxs-inbox', 'bx bx-calendar-alt', 'bx bx-bookmark'];
    const bottomFloatingNav = [
        { 
            icon:'bx bxs-inbox',
            title: "Inbox"
        }, 
        { 
            icon:'bx bx-calendar-alt',
            title: "Planner"
        }, 
        { 
            icon:'bx bx-bookmark',
            title: "Board"
        }
    ];
    const boardNames = ["This Week", "Later"];

    return(
        <>
            <div className="relative flex flex-col h-screen">
                {/* Header */}
                <div className="flex lg:gap-5 justify-between px-4 h-12 bg-[rgb(71,54,153)] text-white">
                    <div className="flex gap-3 items-center">
                        <i className='bx bx-grid-alt text-xl'></i>
                        <i className='bx bxl-trello text-3xl'></i>
                        <p className="hidden xl:flex font-medium tracking-wider">Trello</p>
                    </div>

                    <div className="lg:flex-1 flex gap-3 items-center xl:w-full xl:max-w-4xl">
                        <div className="lg:border lg:border-[rgb(140,143,151)] flex-1 flex lg:gap-2 justify-center lg:justify-start items-center lg:px-2 lg:py-1 lg:bg-white/20 lg:rounded">
                            <i className='bx bx-search text-xl' ></i>
                            <p className="hidden lg:flex font-light">Search</p>
                        </div>
                        <button className="flex items-center px-3 py-1 font-medium bg-[rgb(108,94,173)] rounded">Create</button>
                    </div>

                    <div className="hidden md:flex gap-4 items-center text-xl">
                        <i className='bx bxs-megaphone' ></i>
                        <i className='bx bx-bell' ></i>
                        <i className='bx bx-help-circle' ></i>
                        <div className="flex justify-center items-center h-6 w-6 text-sm bg-amber-300 text-black rounded-full">K</div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <i className='bx bx-dots-horizontal-rounded text-2xl' ></i>
                    </div>

                </div>

                {/* Bulletin Board Nav */}
                <div className="border-t border-[rgb(100,86,169)] flex justify-between px-6 py-3 h-14 bg-gradient-to-r from-[rgb(84,71,151)] to-[rgb(121,78,147)] text-white">
                    <div className="flex gap-5 items-center">
                        <h1 className="font-semibold tracking-wide">My Trello Board</h1>

                        <div className="flex items-center">
                            <i className='bx bx-library text-lg' ></i>
                            <i className='bx bx-chevron-down text-3xl' ></i>
                        </div>
                    </div>

                    <div className="flex gap-2 items-center text-2xl">
                        <div className="hidden lg:flex justify-center items-center h-6 w-6 text-sm bg-amber-300 text-black rounded-full">K</div>

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

                {/* Body for Boards */}
                <div className="flex-1 flex items-start gap-3 p-3 bg-gradient-to-br from-[rgb(113,94,198)] to-[rgb(224,115,188)] overflow-x-scroll scrollbar-hide">
                    {/* Today */}
                    {Array.from({ length: 1 }).map((_, index) => {
                        return <div key={index} className="flex gap-3 flex-col justify-between px-4 py-2 min-h-[88px] w-72 bg-gray-100 rounded-xl shrink-0">
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
                        return <div key={index} className="flex gap-3 flex-col justify-between px-4 py-2 min-h-[88px] w-72 bg-gray-100 rounded-xl shrink-0">
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
                <div className="md:hidden flex gap-2 p-2.5 h-16">
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
                {/* Bottom Floating Nav */}
                <div className="hidden absolute bottom-4 left-1/2 -translate-x-1/2 md:flex gap-2 px-3 py-2 bg-white rounded-lg shadow">
                    <div className="flex gap-4 justify-around">
                        {bottomFloatingNav.map((nav, index) => {
                            return <div key={index} className={`${index === 2 ? "bg-[rgb(207,225,253)] text-gray-600" : ""} flex justify-center items-center rounded-lg`}>
                                <div className={`${index === 2 ? "border-b-2 border-[rgb(24,104,219)] rounded-b" : ""} flex gap-2 items-center px-2 py-0.5 h-full`}>
                                    <i className={`${nav.icon} text-lg`} ></i>
                                    <p className="font-medium">{nav.title}</p>
                                </div>
                            </div>
                        })}
                    </div>

                    <div className="border-l border-gray-300 flex-1 flex gap-2 justify-center items-center px-4 whitespace-nowrap">
                        <i className='bx bx-bookmarks text-lg'></i>
                        <p className="font-medium">Switch boards</p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default MainBoard;