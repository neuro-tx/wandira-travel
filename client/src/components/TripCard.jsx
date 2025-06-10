import React from 'react'
import { MapPin } from 'lucide-react';
import { Link ,useNavigate } from 'react-router'

const TripCard = ({ country, city, groupType, image, title, price, interest, style ,id }) => {
    const navigate = useNavigate();
    const showTrip = (tripId) => {
        navigate(`/admin/trips/${tripId}`)
    }
    return (
        <Link 
          className='relative rounded-lg overflow-hidden shadow-100 pb-2'
          to={`/admin/trips/${id}`}
        //   onClick={showTrip(id)}  
        >
            <div className="w-full max-h-48 h-full rounded-t-lg relative">
                <img
                    src={image}
                    alt={`${country}-${interest}`}
                    className="size-full object-cover rounded-t-lg"
                />
                <span className="absolute top-2 right-5 px-3 py-1 bg-white rounded-full text-sm font-semibold text-primary-400 font-karla">
                    {price} $
                </span>
            </div>
            <div className="mt-2 py-3">
                <div className="px-3">
                    <h2 className="text-dark-200 text-lg md:text-xl font-bold font-karla overflow-ellipsis line-clamp-2">
                        {title}
                    </h2>
                    <div className="flex-center mt-1 text-ligh-200 text-sm">
                        <MapPin size={20} />
                        <p className="flex-center gap-1 ml-2">
                            <span>{country} ,</span>
                            <span>{" "}{city}</span>
                        </p>
                    </div>
                </div>
                <div className="flex-center gap-1.5 px-3 mt-3">
                    <span className="!bg-primary-50 !text-primary-400 font-semibold font-recursive px-3 py-1 rounded-lg text-sm">
                        {groupType}
                    </span>

                    <span className="!bg-pink-50 !text-pink-500 px-3 py-1 rounded-full font-semibold text-sm">
                        {style}
                    </span>
                </div>
            </div>

        </Link>
    )
}

export default TripCard
