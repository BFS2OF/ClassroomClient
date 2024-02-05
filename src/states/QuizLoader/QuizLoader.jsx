import "./styles.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGamepad} from "@fortawesome/free-solid-svg-icons";
import {QuizContext} from "@/common/contexts/QuizContext.jsx";
import {useContext} from "react";
import QuizInformation from "@/states/QuizLoader/components/QuizInformation";

export const QuizLoader = ({setState}) => {
    const {quiz} = useContext(QuizContext);

    return (
        <div className="fl-wrapper">
            <input type='file' id='file' style={{display: 'none'}}/>
            <div className="center">
                <div className="center-left">
                    <h1 className="Greet">
                        Willkommen zurück, <span className="Name">Open Day</span>
                    </h1>
                    <p className="Text">
                        Das Quiz wurde geladen. Klicke “Raum öffnen”, um den Raum zu erstellen.
                    </p>
                    <button className="button" onClick={() => setState("waiting")}>
                        <FontAwesomeIcon className="dateiupload" icon={faGamepad}/>
                        Raum öffnen
                    </button>
                </div>

                <QuizInformation />
            </div>
        </div>
    );
}