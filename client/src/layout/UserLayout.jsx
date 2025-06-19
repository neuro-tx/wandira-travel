import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

const UserLayout = () => {
  return (
        <div>
           

            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default UserLayout
