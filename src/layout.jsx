import Header from "./common/components/Header";
import Footer from "./common/components/Footer";
import QuizLoader from "@/states/QuizLoader";
import FileLoader from "@/states/FileLoader";

import {useContext, useEffect, useState} from "react";
import {QuizContext} from "@/common/contexts/QuizContext.jsx";

export default () => {

    const [state, setState] = useState("quiz");
    const {quiz} = useContext(QuizContext);

    useEffect(() => {
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
                {state === "quiz" && <QuizLoader/>}
            </main>
            <Footer/>
        </>
    );
}