import React from 'react'

const user = [
    {
        id: "1",
        img: "https://watch-live-site.vercel.app/assets/P2-DYFuTBhj.png"
    },
    {
        id: "2",
        img: "https://watch-live-site.vercel.app/assets/P3-BF6ofH-k.PNG"
    },
    {
        id: "2",
        img: "https://watch-live-site.vercel.app/assets/P3-BF6ofH-k.PNG"
    }
]
const Collection = () => {

    return (
        <>
            <div className=" w-full  min-h-[300px] flex  items-center  relative ">
                <div className='  flex flex-wrap justify-center md:justify-between gap-6   px-6 w-full'>
                    {
                        user.map((items) => (
                            <div key={items.id} className='w-full  sm:w-[340px]   mt-7  flex  rounded relative group overflow-hidden '>
                                <img src={items.img} alt="image" className='w-full object-cover ' />
                                <div className='absolute inset-0 bg-black/40 flex flex-col items-center justify-center 
                            transform translate-x-0 group-hover:-translate-x-full 
                            transition-transform duration-500 ease-in-out'></div>
                            </div>
                        ))
                    }

                </div>

            </div>
        </>
    )
}

export default Collection