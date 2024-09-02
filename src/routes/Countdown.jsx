import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Counter from '../components/Counter'
import Title from '../components/Title'
import useCountdown from '../hooks/useCountdown'
import { CountdownContext } from '../context/CountdownContext'

const Countdown = () => {
    const { event } = useContext(CountdownContext);

    if (!event) return <Navigate to="/" />

    const [day, hour, min, sec] = useCountdown(event.date);
    
    return (
        <>
            <Title title={event.title} color={event.color} />
            <div className="countdown-container">
                <Counter title="Days" number={day} color={event.color} />
                <Counter title="Hours" number={hour} color={event.color} />
                <Counter title="Minutes" number={min} color={event.color} />
                <Counter title="Seconds" number={sec} color={event.color} />
            </div>
        </>
    )
}

export default Countdown