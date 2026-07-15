

function Header(){

    return(
        <>
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
                        <div className="flex justify-center items-center h-6 w-6 text-sm bg-amber-500 text-black rounded-full">K</div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <i className='bx bx-dots-horizontal-rounded text-2xl' ></i>
                    </div>

                </div>
        </>
    );
};

export default Header;