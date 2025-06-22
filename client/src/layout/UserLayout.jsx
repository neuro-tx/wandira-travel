import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import { HiArrowLeftStartOnRectangle } from 'react-icons/hi2'
import { Link, useNavigate } from "react-router";
import { useAuth } from '../contexts/shared/Auth';
import ConfirmBox from '../components/ConfirmBox';
import { LOG_OUT } from '../apis/api';
import useAxios from '../utils/useAxios';
import { CircleX } from 'lucide-react';

const UserLayout = () => {
    const { user, logout } = useAuth();
    const [openConfirm, setOpenConfirm] = useState(false);
    const [start, setStart] = useState(false);
    const axiosInstance = useAxios();
    const navigate = useNavigate();
    const [logoutMess, setlogoutMess] = useState(false);


    const handleLogout = async () => {
        setStart(true);
        try {
            const response = await axiosInstance.post(LOG_OUT);
            if (response.data.stateCode) {
                logout();
                console.log("loged out")
                navigate("/auth/login", { replace: true })
            }
        } catch (error) {
            setlogoutMess(true);
        } finally {
            setOpenConfirm(false);
            setStart(false);
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setlogoutMess(false);
        }, 1500)

        return () => clearTimeout(timer)
    }, [logoutMess])

    return (
        <div className='w-full min-h-screen relative'>
            <header className='absolute z-20 top-0 left-0 w-full'>
                <div className="flex container mx-auto justify-between items-center px-5 py-4">
                    <Link
                        to="/"
                        className="flex-center gap-1.5 select-none"
                    >
                        <img
                            src="/assets/images/logo.svg"
                            alt="logo"
                            width={29}
                            loading='lazy'
                        />
                        <span className="main-gradient text-[21px] capitalize special">
                            wandira
                        </span>
                    </Link>
                    <div className="flex-center gap-3">
                        <img
                            src={user?.image || "/assets/images/dummy.jpg"}
                            alt="Avatar"
                            className="size-10 rounded-full object-cover"
                            loading='lazy'
                        />

                        {user && (
                            <button
                                class="size-10 rounded-full flex-center justify-center hover:bg-opacity-40 bg-ligh-100/30 duration-2 hover:bg-ligh-100 cursor-pointer"
                                onClick={() => setOpenConfirm(true)}
                            >
                                <HiArrowLeftStartOnRectangle size={25} color="red" />
                            </button>
                        )}
                    </div>
                </div>
            </header>

            {logoutMess && (
                <div className="p-5 w-full md:w-fit absolute top-0 bg-gray-900 flex-center justify-center duration-3 z-[999] animated px-10 md:rounded-lg left-1/2 -translate-x-1/2">
                    <div className="flex-center">
                        <div className="size-8 rounded-full grid place-items-center aspect-square bg-red-300 text-red-100">
                            <CircleX />
                        </div>
                        <p className="ml-2 font-recursive text-white text-sm md:text-base">
                            Logout failed! ,please try again.
                        </p>
                    </div>
                </div>
            )}

            {openConfirm && (
                <div className="w-full h-full fixed top-0 left-0 z-40">
                    <ConfirmBox
                        title="Log out"
                        description="Are you sure you want to log out? You won't lose any data by logging out."
                        cancelation={setOpenConfirm}
                        confrim={handleLogout}
                        start={start}
                    />
                </div>
            )}

            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default UserLayout
