import './Title.css'

const Title = ({ title, color }) => {
    return (
        <h1 className="title" style={{ color: color }}>{title}</h1>
    )
}

export default Title