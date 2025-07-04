import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import './index.css'
import { router } from './Router/Router.jsx'
import { RouterProvider } from 'react-router'
 import { ToastContainer } from 'react-toastify';
 

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
       <RouterProvider router={router} />
            <ToastContainer></ToastContainer>
           
  </HelmetProvider>
  
  
)
