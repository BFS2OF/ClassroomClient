import "./styles.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileArrowUp} from "@fortawesome/free-solid-svg-icons";
import DragNDrop from "@/common/assets/img/dragndrop.png";
import {useEffect, useRef} from "react";

export const FileLoader = () => {

    const dropRef = useRef();
    const inputFile = useRef(null);

    const uploadFile = (e) => {

    }

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const {files} = e.dataTransfer;

        if (files && files.length) {
            alert("ToDo");
        }
    }

    useEffect(() => {
        dropRef.current.addEventListener('dragover', handleDragOver);
        dropRef.current.addEventListener('drop', handleDrop);

        return () => {
            dropRef.current.removeEventListener('dragover', handleDragOver);
            dropRef.current.removeEventListener('drop', handleDrop);
        };
    }, []);

    return (
        <div className="fl-wrapper">
            <input type='file' id='file' ref={inputFile} style={{display: 'none'}} />
            <div className="center">
                <div className="center-left">
                    <h1 className="Greet">
                        Willkommen zurück, <span className="Name">Herr Brod</span>
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