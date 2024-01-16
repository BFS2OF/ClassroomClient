import Header from "./common/components/Header";
import Footer from "./common/components/Footer";
import FileLoader from "@/states/FileLoader";
import {useState} from "react";


export default () => {

    const [state, setState] = useState("loader");

    return (
        <>
            <Header/>
            <main>
                {state === "loader" && <FileLoader />}
            </main>
            <Footer />
        </>
    );
}