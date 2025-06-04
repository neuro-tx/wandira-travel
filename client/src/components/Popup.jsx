import React from 'react'

const Popup = ({ title, image }) => {
    return (
        <div className='w-lg p-5 rounded-lg shadow-100 absolute top-6 left-1/2 -translate-x-1/2 duration-3 bg-white animated'>
            <div className="w-full relative">
                <div className="flex-center gap-2">
                    <div className="size-7 border-2 rounded-full grid place-items-center border-primary-200">
                        <img
                            src={image}
                            alt="logo"
                            width={23}
                        />
                    </div>

                    <h2 className="text-lg font-recursive text-dark-200 font-semibold capitalize">
                        {title}
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Popup