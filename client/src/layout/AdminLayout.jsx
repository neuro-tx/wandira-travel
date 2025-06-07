import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import SideBar from '../components/SideBar';
import { cn } from '../utils/util';
import { useInterface } from '../contexts/admin/InterfaceContext';
import { useAuth } from '../contexts/shared/Auth';
import NotFound from '../components/NotFound';
import MobileNavBar from '../components/MobileNavBar';

const AdminLayout = () => {
    const { sideBar } = useInterface();
    const { user, authed } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (authed) return;

        if (!user) {
            navigate("/auth/login", { replace: true });
            return;
        }
    }, [user, authed, navigate]);

    if (authed) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return null;
    }

    if (user?.role !== "admin") {
        return <NotFound />
    }

    return (
        <div className='w-screen min-h-dvh relative'>
            <div className={cn(
                "w-52 lg:w-64 h-full fixed top-0 z-50 shadow-100 md:left-0 -left-full bg-black/60 duration-2",
                sideBar ? "left-0 w-full" : ""
            )}>
                <SideBar />
            </div>

            <main className={cn("md:ml-52 lg:ml-64 duration-2 min-h-dvh bg-ligh-100")}>
                <MobileNavBar />
                <main className='px-5'>
                    <Outlet />
                </main>
            </main>
        </div>
    )
}

export default AdminLayout