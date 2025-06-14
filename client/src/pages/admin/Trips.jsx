import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import Header from '../../components/Header'
import Button from '../../components/Button'
import { Map } from 'lucide-react'
import useAxios from '../../utils/useAxios'
import { TRIP_API } from '../../apis/api';
import TripCard from '../../components/TripCard'
import Spinear from '../../components/loaders/Spinear'


const Trips = () => {
    const axiosInstance = useAxios();
    const [trips, setTrips] = useState([]);
    const [errorMess, setErrorMess] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    const fetchTrips = async () => {
        setIsLoading(true);
        try {
            const response = await axiosInstance.get(TRIP_API);
            setTrips(response.data.data);
        } catch (error) {
            setErrorMess(error.message);
            setTrips([]);
        } finally {
            setIsLoading(false)
        }
    };

    useEffect(() => {
        fetchTrips();
    }, []);
    if (isLoading) {
        return (
            <div className="h-dvh w-full">
                <div className="absolute-center">
                    <Spinear />
                </div>
            </div>
        )
    }

    return (
        <div className='w-full relative px-5 min-h-lvh'>
            <div className="flex-between w-full flex-col sm:flex-row px-3">
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

            {errorMess && (
                <div className="w-full h-full overflow-hidden">
                    <div className="absolute-center">
                        <p className="text-red-200 font-bold text-xl font-recursive">
                            {errorMess}
                        </p>
                    </div>
                </div>
            )}

            <div className="mt-3 w-full overflow-x-hidden">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2 overflow-y-auto h-full">
                    {trips.map((trip) => (
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
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Trips