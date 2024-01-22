import Header from "./common/components/Header";
import Footer from "./common/components/Footer";
import QuizLoader from "@/states/QuizLoader";
import FileLoader from "@/states/FileLoader";
import WaitingRoom from "@/states/WaitingRoom";

import {useContext, useEffect, useState} from "react";
import {QuizContext} from "@/common/contexts/QuizContext.jsx";
import "@/common/util/socket.js";
import {socket} from "@/common/util/socket.js";
import InGame from "@/states/InGame/index.js";
import Ending from "@/states/Ending/index.js";

export default () => {

    const [state, setState] = useState("quiz");
    const {quiz} = useContext(QuizContext);

    useEffect(() => {
        socket.connect();

        return () => {
            socket.disconnect();
        }
    }, []);

    useEffect(() => {
        if (quiz === "file" || quiz === "quiz") return;

        if (quiz === null) {
            setState("file");
        } else {
            setState("quiz");
        }
    }, [quiz]);

    return (
        <>
            <Header/>
            <main>
                {state === "file" && <FileLoader/>}
                {state === "quiz" && <QuizLoader setState={setState}/>}
                {state === "waiting" && <WaitingRoom setState={setState}/>}
                {state === "ingame" && <InGame setState={setState}/>}
                {state === "ending" && <Ending />}
            </main>
            <Footer/>
        </>
    );
}