import "./styles.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileArrowUp} from "@fortawesome/free-solid-svg-icons";
import DragNDrop from "@/common/assets/img/dragndrop.png";

export const QuizLoader = () => {
    return (
        <div className="quiz-container">
            <div className="center">
                <div className="center-left">
                    <h1 className="Greet">
                            Willkommen zurück, <span className="Name">Herr Brod</span>
                    </h1>
                    <p className="Text">
                        Das Quiz wurde geladen. Klicke “Raum öffnen”, um den Raum zu erstellen.
                    </p>
                    <button className="button">
                        <img src="/public/assets/img/controllerthingy.png" alt=""/>
                            Raum öffnen
                    </button>
                </div>
                <div className="container-right" ref={dropRef}>
                    <img className="DnD" src={DragNDrop} alt="Raum öffnen"/>
                    <h2>Das Schulquiz</h2>
                </div>
            </div>
        </div>
    );
}