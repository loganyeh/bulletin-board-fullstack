

function MobileNav(){
    const bottomNav = ['bx bxs-inbox', 'bx bx-calendar-alt', 'bx bx-bookmark'];

    return(
        <>
            <div className="md:hidden flex h-16">
                <div className="grid gap-3 grid-cols-3 p-3 w-10/12">
                    {bottomNav.map((nav, index) => {
                        return <div key={index} className={`${index === 2 ? "bg-[rgb(207,225,253)] text-gray-600" : ""} flex justify-center items-center rounded-lg`}>
                            <div className={`${index === 2 ? "border-b-2 border-[rgb(24,104,219)]" : ""} flex items-center h-full`}>
                                <i className={`${nav} text-lg`} ></i>
                            </div>
                        </div>
                    })}
                </div>

                <div className="flex-1 flex justify-center items-center">
                    <div className="border-l border-gray-300 flex justify-center items-center p-3 w-full">
                        <i className='bx bx-bookmarks text-lg'></i>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileNav;