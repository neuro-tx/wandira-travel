import React from 'react';
import { Navigate, Outlet } from 'react-router'
import SideBar from '../components/SideBar';
import { cn } from '../utils/util';
import { useInterface } from '../contexts/admin/InterfaceContext';
import { useAuth } from '../contexts/shared/Auth';
import NotFound from '../components/NotFound';
import MobileNavBar from '../components/MobileNavBar';

const AdminLayout = () => {
    const { sideBar ,setSidebar } = useInterface();
    const {user} = useAuth();

    // check if the user is admin or not
    // if not show not found page
    if (!user || user.role !== "admin" || !user.role) {
        return <NotFound />
    }

    return (
        <div 
          className='w-screen min-h-dvh relative'>
            <div className={cn("w-56 lg:w-64 h-full bg-black/60 fixed top-0 z-50 shadow-100 md:left-0 -left-full duration-2" ,sideBar ? "left-0 w-full" : "")}>
                <SideBar />
            </div>

            <main className={cn("md:ml-56 lg:ml-64 duration-2 min-h-dvh bg-ligh-100")}>
                <MobileNavBar />
                <Outlet />
            </main>
        </div>
    )
}

export default AdminLayout
