import React from 'react';
import { Outlet } from 'react-router'

const AdminLayout = () => {
    return (
        <div className='flex items-baseline w-screen min-h-dvh overflow-x-hidden'>
            <aside className='w-64 bg-ligh-100 min-h-dvh'>
                Side bar
            </aside>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default AdminLayout
