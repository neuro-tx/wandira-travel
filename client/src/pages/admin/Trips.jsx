import React from 'react'
import { Link } from 'react-router'

const Trips = () => {
    const trips = [
        { id: 11, data: "Hello trip one" },
        { id: 12, data: "Hello trip one" },
        { id: 13, data: "Hello trip one" },
    ]
    return (
        <div>
            {trips.map((trip) => (
                <Link to={`/admin/trips/${trip.id}`} key={trip.id} className='block p-2 text-pink-500 '>
                    {trip.data}
                </Link>
            ))}
        </div>
    )
}

export default Trips
