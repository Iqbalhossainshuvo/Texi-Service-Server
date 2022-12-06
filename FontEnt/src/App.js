import logo from './logo.svg';
import './App.css';

import { RouterProvider } from 'react-router-dom';
import { routes } from './Component/Routes/routes';
import { Toaster } from 'react-hot-toast';





function App() {
  return (
    < >
      <RouterProvider router={routes}>
        
      </RouterProvider>
      
      <Toaster></Toaster>
    </>
  );
}

export default App;
