import React from 'react'
import { User, Map, BookCheck } from 'lucide-react'
import { cn } from '../utils/util'

const StaticBox = ({ title, state, count, percent, icon, chart }) => {
    return (
        <div className='p-5 px-4 lg:px-5 bg-white rounded-md shadow-100 hover:shadow-400 duration-2'>
            <div className="flex-center gap-1.5">
                <div className="size-8 flex-center justify-center bg-pink-100 rounded-full aspect-square text-pink-500">
                    <img
                        src={icon}
                        alt="icon"
                        width={16}
                    />
                </div>
                <p className="text-gray-600 font-bold text-base font-karla capitalize">
                    {title}
                </p>
            </div>

            <div className="flex-center justify-between mt-3">
                <div className="">
                    <h4 className="text-xl lg:text-2xl font-bold">{count}</h4>
                    <div className="center flex-row gap-1.5">
                        <div className="flex-center gap-1">
                            {state === "increase" ?
                                (
                                    <img
                                        src='/assets/images/arrow-up-green.svg'
                                        alt='increment'
                                        width={15}
                                    />
                                ) : (
                                    <img
                                        src='/assets/images/arrow-down-red.svg'
                                        alt='increment'
                                        width={15}
                                    />
                                )}
                            <span className={cn("font-semibold text-sm", state === "increase" ? "text-green-500" : "text-red-100")}>
                                {percent}%
                            </span>
                        </div>
                        <p className="text-gray-600 font-medium font-karla text-base md:text-sm whitespace-nowrap">
                            vs last month
                        </p>
                    </div>
                </div>
                {/* <img
                    src={chart}
                    alt="chart"
                    className='w-[115px] lg:w-[125px]'
                /> */}
            </div>
        </div>
    )
}

export default StaticBox