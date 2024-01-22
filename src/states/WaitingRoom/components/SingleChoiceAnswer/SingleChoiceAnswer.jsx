import {useState} from "react";
import "./styles.css";

export const SingleChoiceAnswer = ({answer}) => {

    return (
        <div className="answer">
            <h1>{answer}</h1>
        </div>
    )
}