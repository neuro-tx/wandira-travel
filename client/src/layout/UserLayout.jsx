import React from 'react'
import { Outlet } from 'react-router'

const UserLayout = () => {
  return (
        <div>
            <nav className='p-3 shadow-100'>
                Nav bar
            </nav>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default UserLayout
