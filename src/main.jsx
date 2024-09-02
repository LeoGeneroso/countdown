import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/Home.jsx'
import Countdown from './routes/Countdown.jsx'

import { CountdownContext, CountdownProvider } from './context/CountdownContext.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        //errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/countdown",
                element: <Countdown />
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CountdownProvider>
            <RouterProvider router={router} />
        </CountdownProvider>
    </StrictMode>,
)
