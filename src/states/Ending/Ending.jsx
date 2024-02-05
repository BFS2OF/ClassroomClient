import "./styles.css";
import {useEffect, useState} from "react";
import {socket} from "@/common/util/socket.js";
import Avatar from "@/common/assets/img/avatar.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTableList, faTrophy} from "@fortawesome/free-solid-svg-icons";

export const Ending = () => {
    const [leaderBoard, setLeaderBoard] = useState([]);

    const [currentPage, setCurrentPage] = useState(0); // 0 = Podium, 1 = Leaderboard

    useEffect(() => {
        socket.emit("CLOSE_ROOM", {}, (data) => {
            setLeaderBoard(Object.values(data).sort((a, b) => b.points - a.points));
        });
    }, []);

    return (
        <div className="ending">
            <h2>Ending</h2>

            <div className="page-chooser">
                <div className={"page-item" + (currentPage === 0 ? " page-item-active" : "")}
                     onClick={() => setCurrentPage(0)}>
                    <FontAwesomeIcon icon={faTrophy}/>
                    <h3>Podium</h3>
                </div>
                <div className={"page-item" + (currentPage === 1 ? " page-item-active" : "")}
                     onClick={() => setCurrentPage(1)}>
                    <FontAwesomeIcon icon={faTableList}/>
                    <h3>Leaderboard</h3>
                </div>
            </div>

            {currentPage === 0 && <div className="podium">
                {leaderBoard[2] && <div className="place-item third-place">
                    <div className="player-item podium-player-item">
                        <img src={Avatar} alt="Avatar"/>
                        <h2>{leaderBoard[2].name}</h2>
                    </div>
                    <div className="podest-block"/>
                </div>}

                {leaderBoard[0] && <div className="place-item first-place">
                    <div className="player-item podium-player-item">
                        <img src={Avatar} alt="Avatar"/>
                        <h2>{leaderBoard[0].name}</h2>
                    </div>
                    <div className="podest-block"/>
                </div>}

                {leaderBoard[1] && <div className="place-item second-place">
                    <div className="player-item podium-player-item">
                        <img src={Avatar} alt="Avatar"/>
                        <h2>{leaderBoard[1].name}</h2>
                    </div>
                    <div className="podest-block"/>
                </div>}

            </div>}

            {currentPage === 1 && <div className="leaderboard">
                {leaderBoard.map((item, index) => (
                    <div className="leaderboard-item" key={index}>
                        <div className="leaderboard-profile">
                            <img src={Avatar} alt="Avatar"/>
                            <h2>{item.name}</h2>
                        </div>
                        <p>{item.points}</p>
                    </div>
                ))}
            </div>}
        </div>
    )
}