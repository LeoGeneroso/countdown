import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { CountdownContext } from "../context/CountdownContext";
import "./Home.css"

const Home = () => {
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [image, setImage] = useState();
    const [color, setColor] = useState();

    const { setEvent } = useContext(CountdownContext);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const countdown = {
            title,
            date, 
            image,
            color
        }

        setEvent(countdown);
        
        navigate("/countdown");
    }

    return (
        <div className="home">
            <h2>Set up your countdown!</h2>
            <form className="countdown-form" onSubmit={handleSubmit}>
                <label>
                    <span>Title:</span>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Enter the event title"
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <span>Event date:</span>
                    <input
                        type="date"
                        name="date"
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <span>Image:</span>
                    <input
                        type="text"
                        name="image"
                        placeholder="Enter the image URL"
                        onChange={(e) => setImage(e.target.value)}
                    />
                </label>
                <label>
                    <span>Theme color:</span>
                    <input
                        type="color"
                        name="color"
                        onChange={(e) => setColor(e.target.value)}
                        required
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Home