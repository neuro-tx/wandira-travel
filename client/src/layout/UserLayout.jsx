import React from 'react'
import { Outlet } from 'react-router'

const UserLayout = () => {
  return (
        <div>
           

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default UserLayout
