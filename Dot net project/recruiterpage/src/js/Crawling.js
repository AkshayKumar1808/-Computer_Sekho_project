import { useEffect, useState } from "react";
import '../css/Crawling.css';

export default function Crawling() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:5120/api/allactiveAnnoucment")
            .then(res => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json(); // Correct the JSON parsing
            })
            .then(data => {
                console.log("Fetched message:", data);
                if (data && data.length > 0) {
                    setMessage(data[0].announcementText); // Assuming the API returns an array of announcements
                }
            })
            .catch(error => console.error('Error fetching announcements:', error));
    }, []);

    return (
        <div className="marquee-container">
            <div className="marquee"><b>{message}</b></div>
        </div>
    );
}
