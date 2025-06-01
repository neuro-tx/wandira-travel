import { createBrowserRouter } from 'react-router';

import UserLayout from '../layout/UserLayout';
import AdminLayout from '../layout/AdminLayout';
import Home from '../pages/user/Home';
import Dashboard from '../pages/admin/Dashboard';
import Trips from '../pages/admin/Trips';
import TripDetails from '../pages/admin/TripDetails';
import NotFound from '../components/NotFound';
import Profile from '../pages/user/Profile';
import Travels from '../pages/user/Travels';
import TravelDetails from '../pages/user/TravelDetails';
import CreatTrip from '../pages/admin/CreatTrip';
import AllUsers from '../pages/admin/AllUsers';
import About from '../pages/user/About';
import Contact from '../pages/user/Contact';


const router = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'home', element: <Home /> },
            { path: 'profile', element: <Profile /> },
            { path: 'travels', element: <Travels /> },
            { path: 'travels/:travelId', element: <TravelDetails /> },
            { path: "about", element: <About /> },
            { path: "contact", element: <About /> }
        ]
    },
    {
        path: 'admin',
        element: <AdminLayout />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: 'dashboard', element: <Dashboard /> },
            { path: 'create-trip', element: <CreatTrip /> },
            { path: 'trips', element: <Trips /> },
            { path: 'trips/:tripId', element: <TripDetails /> },
            { path: 'all-users', element: <AllUsers /> }
        ]
    },
    { path: '*', element: <NotFound /> }
]);


export default router
