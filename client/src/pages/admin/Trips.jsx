import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import Header from '../../components/Header'
import Button from '../../components/Button'
import { Map } from 'lucide-react'
import useAxios from '../../utils/useAxios'
import { TRIP_API } from '../../apis/api';
import TripCard from '../../components/TripCard'

const Trips = () => {
    const axiosInstance = useAxios();
    const [trips, setTrips] = useState([]);
    const [errorMess, setErrorMess] = useState("")

    const fetchTrips = async () => {
        try {
            const response = await axiosInstance.get(TRIP_API);
            setTrips(response.data.data);
        } catch (error) {
            setErrorMess(error.message);
            setTrips([]);
        }
    };

    useEffect(() => {
        fetchTrips();
    }, []);

    return (
        <div className='relative pb-10'>
            <div className="flex-between w-full flex-col sm:flex-row">
                <Header
                    title={`add new trip`}
                    description={"View and generate AI travel plans"}
                />
                <Button
                    title="create a trip"
                    classContainer="bg-primary-200 rounded-md text-white flex-center gap-1.5 hover:bg-primary-400 whitespace-nowrap justify-center cursor-not-allowed"
                    leftIcon={<Map size={19} />}
                    topClass={"sm:w-fit shadow-100 rounded-lg selected-none opacity-40 pointer-events-none"}
                />
            </div>

            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-full gap-4">
                {trips.map((trip) => (
                    // <Link
                    //   key={trip._id}
                    //   to={`/admin/trips/${trip._id}`}
                    //   >
                      <TripCard
                        key={trip._id}
                        id={trip._id}
                        country={trip.country}
                        city={trip.location.city}
                        groupType={trip.groupTypes}
                        image={trip.images[0]}
                        title={trip.title}
                        price={trip.price}
                        interest={trip.interests}
                        style={trip.travelStyles}
                    />
                    // </Link>
                ))}
            </div>
        </div>
    )
}

export default Trips
