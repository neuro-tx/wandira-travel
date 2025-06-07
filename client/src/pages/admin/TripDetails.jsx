import React from 'react';
import { useParams } from 'react-router';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { Map } from 'lucide-react';

const TripDetails = () => {
    const { tripId } = useParams();

    return (
        <div>
            <div className="flex-between w-full flex-col sm:flex-row">
                <Header
                    title={`trips`}
                    description={"View and generate AI travel plans"}
                />
                <Button
                    title="create a trip"
                    classContainer="bg-primary-200 rounded-md text-white flex-center gap-1.5 hover:bg-primary-400 whitespace-nowrap justify-center cursor-not-allowed"
                    leftIcon={<Map size={19} />}
                    topClass={"sm:w-fit shadow-100 rounded-lg selected-none opacity-40 pointer-events-none"}
                />
            </div>
            Trip ID: {tripId}
        </div>
    );
};

export default TripDetails;
