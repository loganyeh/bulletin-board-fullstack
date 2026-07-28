

function ListSkeleton(){
    
    return(
        <>
            <div className="flex gap-3 flex-col px-4 py-2 min-h-[88px] w-72 bg-gray-100 rounded-xl shrink-0">
                <h2 className="h-6 bg-black animate-pulse"></h2>

                <div className="flex gap-2 flex-col font-light tracking-wide">
                    {(Array.from({length: 3})).map((_, index) => {
                        return <div key={index} className={`relative flex px-3 py-1.5 bg-gray-300 rounded-lg shadow-md animate-pulse`}>
                            <div className='h-6 w-1/2'></div>   
                        </div>
                    })}
                </div>

                <div className="flex gap-4 justify-between items-center text-gray-600">
                    <div className="flex-1 flex gap-1.5 items-center py-1 rounded">
                        <i className='bx bx-plus text-xl' ></i>
                        <p className="font-medium">Add a card</p>
                    </div>

                    <i className='bx bx-layer-plus text-xl'></i>
                </div>
            </div>
        </>
    );
};

export default ListSkeleton;