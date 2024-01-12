import "./style.css";

export const Body = () => {
    return (
        <div className="Body-content">
        <div className="center">
            <h1 className="Greet">
                Willkommen zurück, <span className="Name">Herr Brod</span>
            </h1>
            <p className="Text">
                Starten Sie ein Quiz indem Sie die Schaltfläche “Datei auswählen”
                klicken,
                <br />
                oder eine Datei in den rechten Bereich ziehen.
            </p>
            <button className="button">
                <img height="30" src="/img/file-arrow-up-solid.svg" /> Datei auswählen
            </button>
            <img className="DnD" src="/img/image 5.png" />
        </div>
        </div>
    )
}