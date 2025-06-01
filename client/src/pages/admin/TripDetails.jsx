import React from 'react';
import { useParams } from 'react-router'; 

const TripDetails = () => {
    const { tripId } = useParams();

    return (
        <div>
            Trip ID: {tripId}
        </div>
    );
};

export default TripDetails;
