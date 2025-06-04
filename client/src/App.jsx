import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router';

import router from './routes';
import { AuthProvider } from './contexts/shared/Auth';
import Loading from './components/loaders/Loading';

const App = () => {
  const [loading, setloading] = useState(true);

   useEffect(() => {
    // Check if document is already loaded
    if (document.readyState === "complete") {
      setloading(false);
      return; // Exit early, no need for event listener
    }

    // If not loaded yet, set up event listener
    const handleLoading = () => {
      setloading(false);
    };

    window.addEventListener("load", handleLoading);

    // Cleanup function
    return () => {
      window.removeEventListener("load", handleLoading);
    };
  }, []);

  if (loading){
    return <Loading />
  }

  return (
    <div className="w-screen min-h-dvh bg-light-100 overflow-x-hidden relative">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
};

export default App;

