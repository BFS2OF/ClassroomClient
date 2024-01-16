import Header from "./common/components/Header";
import Footer from "./common/components/Footer";
import FileLoader from "@/states/FileLoader";



import {useState} from "react";
import Header2 from "./components/Header2";
import Footer2 from "./components/Footer2";
import QuizLoader from "@/states/QuizLoader/index.js";

export default () => {

    const [state, setState] = useState("file");


    return (
        <>
            <Header/>
            <main>
                {state === "file" && <FileLoader />}
                {state === "quiz" && <QuizLoader />}
            </main>
            <Footer/>
        </>
    );
}