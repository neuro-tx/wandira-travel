import React from 'react';
import { RouterProvider } from 'react-router';

import router from './routes';
import { AuthProvider } from './contexts/shared/Auth';

const App = () => {
  return (
    <div className="w-screen min-h-dvh bg-light-100 overflow-x-hidden relative">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
};

export default App;

