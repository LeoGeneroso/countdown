import './Counter.css'

const Counter = ({ title, number, color }) => {
    return (
        <div className="counter">
            <p className="counter-number" style={{ backgroundColor: color }}>{number}</p>
            <h3 className="counter-text" style={{ color: color }}>{title}</h3>
        </div>
    )
}

export default Counter