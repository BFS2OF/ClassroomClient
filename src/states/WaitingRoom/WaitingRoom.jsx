import "./styles.css";
import {useContext, useEffect, useState} from "react";
import "@/common/util/socket.js";
import {socket} from "@/common/util/socket.js";
import {QuizContext} from "@/common/contexts/QuizContext.jsx";
import QRCode from "qrcode.react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGamepad, faUsers} from "@fortawesome/free-solid-svg-icons";
import Sound from "react-sound";
import WaitingMusic from "@/common/assets/music/waiting.wav";
import AvatarImage from "@/common/assets/img/avatar.png";

export const WaitingRoom = ({setState}) => {

    const {quiz} = useContext(QuizContext);
    const [roomCode, setRoomCode] = useState(-1);

    const [players, setPlayers] = useState([]);
    const [qrShown, setQrShown] = useState(false);


    useEffect(() => {
        socket.emit("CREATE_ROOM", {password: "1234de"}, (roomCode) => {
            setRoomCode(roomCode);
        });

        socket.on("PLAYER_JOINED", (player) => {
            setPlayers(players => [...players, player]);
        });

        socket.on("PLAYER_LEFT", (player) => {
            setPlayers(players => players.filter(p => p.id !== player.id));
        });

        return () => {
            socket.off("PLAYER_JOINED");
            socket.off("PLAYER_LEFT");
        }
    }, []);

    const getBasedOnName = (name) => {
        const nameSum = name.split("").reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
        const hue = nameSum % 360;


        return `sepia(100%) hue-rotate(${hue}deg)`;
    }

    return (
        <div className="waiting-room">
            <Sound url={WaitingMusic} playStatus={Sound.status.PLAYING} loop={true}/>
            {qrShown && <div className="qr-dialog" onClick={() => setQrShown(!qrShown)}>
                <QRCode value={`https://studentclient.pages.dev/?code=${roomCode}`} className="qr-big"
                        renderAs="svg"/>
            </div>}

            <div className="info-area">
                <div className="quiz-info">
                    <div className="quiz-descriptor">
                        <h2>{quiz.title}</h2>
                        <p>{quiz.description}</p>
                    </div>

                    <QRCode value={`https://studentclient.pages.dev/?code=${roomCode}`} className="qr"
                            renderAs="svg" onClick={() => setQrShown(!qrShown)}/>
                </div>

                <h3>Verbinden über die Webseite <span>www.bs2ab.quiz</span> mit Code:</h3>

                <h1>{roomCode}</h1>
            </div>
            <div className="player-area">
                <div className="player-header">

                    <h2>Teilnehmer <span>{players.length}</span></h2>

                    <button className="button" onClick={() => setState("ingame")}
                            disabled={players.length < 1}>
                        <FontAwesomeIcon className="dateiupload" icon={faGamepad}/>
                        Starten
                    </button>
                </div>

                <div className="player-list">
                    {players.map((player, index) => (
                        <div className="player-item" key={index}>
                            <img src={AvatarImage} alt="Avatar" className="player-avatar"
                                    style={{filter: getBasedOnName(player.name)}}/>
                            <p className="player-text">{player.name}</p>
                        </div>
                    ))}

                    {players.length === 0 && <div className="no-players">
                        <FontAwesomeIcon icon={faUsers} />
                        <p>Warte auf Spieler...</p>
                    </div>}
                </div>

            </div>
        </div>
    );

}