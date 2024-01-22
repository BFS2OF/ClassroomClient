import "./styles.css";
import {useEffect, useState} from "react";
import {socket} from "@/common/util/socket.js";

export const Ending = () => {
    const [leaderBoard, setLeaderBoard] = useState([]);

    useEffect(() => {
        socket.emit("CLOSE_ROOM", {}, (data) => {
            setLeaderBoard(Object.values(data));
        });
    }, []);

    return (
        <div className="ending">
            <h2>Ending</h2>

            <div className="leaderboard">
                {leaderBoard.map((item, index) => (
                    <div className="leaderboard-item" key={index}>
                        <p>{JSON.stringify(item)}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}