import React from 'react';
import { Navigate, Outlet } from 'react-router'
import SideBar from '../components/SideBar';
import { cn } from '../utils/util';
import { useInterface } from '../contexts/admin/InterfaceContext';
import { useAuth } from '../contexts/shared/Auth';
import NotFound from '../components/NotFound';


const AdminLayout = () => {
    const { sideBar } = useInterface();
    const {user} = useAuth();

    // check if the user is admin or not
    // if not show not found page
    if (!user || user.role !== "admin") {
        return <NotFound />
    }

    return (
        <div className='w-screen min-h-dvh'>
            <div className={cn("w-64 h-full bg-black/50 fixed top-0 z-50 shadow-100 duration-2 md:left-0 -left-full")}>
                <SideBar />
            </div>

            <main className={cn("md:ml-64 duration-2 w-full min-h-dvh")}>
                <Outlet />
            </main>
        </div>
    )
}

export default AdminLayout
