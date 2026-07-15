

function List(){
    
    return(
        <>
            <div className="flex gap-3 flex-col justify-between px-4 py-2 min-h-[88px] w-72 bg-gray-100 rounded-xl shrink-0">
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
        </>
    );
};

export default List;