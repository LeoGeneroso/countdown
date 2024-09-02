import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { CountdownContext } from './context/CountdownContext'
import Hourglass from './assets/hourglass.jpg'
import './App.css'

function App() {
    const { event } = useContext(CountdownContext);

    return (
        <div 
            className="App" 
            style={
                event?.image 
                    ? { backgroundImage: `url(${event.image})` }
                    : { backgroundImage: `url(${Hourglass})` }
            }
        >
            <div className="container">
                <Outlet />
            </div>
        </div>
    )
}

export default App
