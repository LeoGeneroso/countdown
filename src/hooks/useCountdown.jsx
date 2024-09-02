import { useState } from "react"

const useCountdown = (date) => {
    const [day, setDay] = useState();
    const [hour, setHour] = useState();
    const [min, setMin] = useState();
    const [sec, setSec] = useState();

    const countdown = () => {
        let interval = ((new Date(date).getTime()) - (new Date().getTime())) / 1000;
        setDay(Math.floor(interval / 86400));
        interval %= 86400;
        setHour(Math.floor(interval / 3600) + (new Date().getTimezoneOffset() / 60));
        interval %= 3600;
        setMin(Math.floor(interval / 60));
        setSec(Math.floor(interval % 60));
    }

    setInterval(countdown, 1000);

    return [day, hour, min, sec];
}

export default useCountdown