import "./styles.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileArrowUp} from "@fortawesome/free-solid-svg-icons";
import DragNDrop from "../media/dragndrop.png";

export const Body = () => {
    return (
        <div className="Body-content">
        <div className="center">
            <div className="center-left">
                <h1 className="Greet">
                    Willkommen zurück, <span className="Name">Herr Brod</span>
                </h1>
                <p className="Text">
                    Starten Sie ein Quiz indem Sie die Schaltfläche “Datei auswählen”
                    klicken, oder eine Datei in den rechten Bereich ziehen.
                </p>
                <button className="button">
                    <FontAwesomeIcon className="dateiupload" icon={faFileArrowUp}/>
                    Datei auswählen...
                </button>
            </div>
            <div className="container-right">
                <img className="DnD" src={DragNDrop} />
                <h2>Quiz-Datei hierhei ziehen</h2>
            </div>
        </div>
        </div>
    )
}