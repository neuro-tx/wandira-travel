import React from 'react';
import { useParams } from 'react-router';

const TravelDetails = () => {
    const { travelId } = useParams()
    return (
        <div>TravelDetails</div>
    )
}

export default TravelDetails