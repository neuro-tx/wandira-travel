import React from 'react';
import { CircleX ,TriangleAlert ,Info ,CircleCheckBig } from 'lucide-react';
import { cn } from '../utils/util';

const Popup = ({ code, message="Something went wrong , try again later" }) => {
    let icon;
    let style;
    switch(code){
        case 200 :
            icon = <CircleCheckBig size={19} />
            style="bg-green-100 text-green-800"
            break
        case 400 :
            icon = <CircleX size={19} />
            style="bg-red-50 text-red-800"
            break
        case 500 :
            icon = <TriangleAlert size={19} />
            style="bg-pink-50 text-pink-800"
            break
        case 201 :
            icon = <CircleCheckBig size={19} />
            style="bg-green-100 text-green-800"
            break
        default :
            icon = <Info size={19} />
            style="bg-blue-100 text-blue-800"
            break

    }
    return (
        <div className='w-sm md:w-lg p-5 py-4 rounded-lg shadow-100 absolute top-6 left-1/2 -translate-x-1/2 duration-3 bg-white animated'>
            <div className="w-full relative">
                <div className="flex-center gap-2">
                    <div className={cn("size-8 rounded-full grid place-items-center" ,style)}>
                        {icon}
                    </div>

                    <h2 className="text-sm sm:text-base md:text-lg font-recursive text-dark-200 font-semibold capitalize">
                        {message}
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Popup