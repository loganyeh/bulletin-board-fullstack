

function FloatingNav(){
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

    return(
        <>
            <div className="hidden absolute bottom-3 left-1/2 -translate-x-1/2 md:flex gap-2 p-2 bg-white text-gray-800 rounded-lg shadow-md">
                <div className="flex gap-2">
                    {bottomFloatingNav.map((nav, index) => {
                        return <div key={index} className={`${index === 2 ? "border-b-2 border-[rgb(24,104,219)] bg-[rgb(207,225,253)] text-blue-600 rounded-b-md" : ""} flex gap-1.5 justify-center items-center px-3 py-0.5 rounded-md`}>
                            <i className={`${nav.icon} text-lg`} ></i>
                            <p className="font-medium">{nav.title}</p>
                        </div>
                    })}
                </div>

                <div className="border-l border-gray-300 px-1">
                    <div className="flex-1 flex gap-1.5 justify-center items-center px-3 py-0.5 whitespace-nowrap">
                        <i className='bx bx-bookmarks text-lg'></i>
                        <p className="font-medium">Switch boards</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FloatingNav;