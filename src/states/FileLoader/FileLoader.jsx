import "./styles.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileArrowUp} from "@fortawesome/free-solid-svg-icons";
import DragNDrop from "@/common/assets/img/dragndrop.png";
import {useContext, useEffect, useRef} from "react";
import {QuizContext} from "@/common/contexts/QuizContext.jsx";

export const FileLoader = () => {

    const HOST_URL = "https://pastefy.app/%s/raw";

    const dropRef = useRef();
    const inputFile = useRef(null);
    const {updateQuiz} = useContext(QuizContext);

    const uploadFile = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const quiz = e.target.result;
            if (!updateQuiz(quiz)) {
                alert("Invalid quiz format");
            }
        }

        reader.readAsText(file);
    }

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const file = e.dataTransfer.files[0];

        const reader = new FileReader();

        reader.onload = (e) => {
            const quiz = e.target.result;
            if (!updateQuiz(quiz)) {
                alert("Invalid quiz format");
            }
        }

        reader.readAsText(file);
    }

    useEffect(() => {
        const url = new URL(window.location.href);
        const loadFile = url.searchParams.get("quizId");

        if (loadFile) {
            fetch(HOST_URL.replace("%s", loadFile))
                .then(res => res.text())
                .then(quiz => {
                    console.log(quiz);
                    if (!updateQuiz(quiz)) {
                        alert("Invalid quiz format");
                    }
                })
                .catch(e => alert("Invalid quiz format"));
        }
        dropRef.current?.addEventListener('dragover', handleDragOver);
        dropRef.current?.addEventListener('drop', handleDrop);

        inputFile.current.addEventListener('change', uploadFile);

        return () => {
            dropRef.current?.removeEventListener('dragover', handleDragOver);
            dropRef.current?.removeEventListener('drop', handleDrop);

            inputFile.current?.removeEventListener('change', uploadFile);
        };
    }, []);

    return (
        <div className="fl-wrapper">
            <input type='file' id='file' ref={inputFile} style={{display: 'none'}} accept=".quizlet"/>
            <div className="center">
                <div className="center-left">
                    <h1 className="Greet">
                        Willkommen zurück, <span className="Name">Open Day</span>
                    </h1>
                    <p className="Text">
                        Starten Sie ein Quiz indem Sie die Schaltfläche “Datei auswählen”
                        klicken, oder eine Datei in den rechten Bereich ziehen.
                    </p>
                    <button className="button" onClick={() => inputFile.current.click()}>
                        <FontAwesomeIcon className="dateiupload" icon={faFileArrowUp}/>
                        Datei auswählen...
                    </button>
                </div>
                <div className="container-right" ref={dropRef}>
                    <img className="DnD" src={DragNDrop} alt="Drag 'n Drop"/>
                    <h2>Quiz-Datei hierher ziehen</h2>
                </div>
            </div>
        </div>
    )
}