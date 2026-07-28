

function ListSkeleton(){
    
    return(
        <>
            <div className="flex gap-3 flex-col px-4 py-2 h-[500px] w-72 bg-gray-100 rounded-xl shrink-0">
                <h2 className="h-6 bg-black animate-pulse"></h2>

                <div className="flex gap-2 flex-col font-light tracking-wide">
                    {(Array.from({length: 3})).map((_, index) => {
                        return <div key={index} className={`relative flex px-3 py-1.5 bg-gray-300 rounded-lg shadow-md animate-pulse`}>
                            <div className='h-6 w-1/2'></div>   
                        </div>
                    })}
                </div>
            </div>
        </>
    );
};

export default ListSkeleton;