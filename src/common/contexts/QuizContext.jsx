import {createContext, useState} from "react";
import {Buffer} from "buffer";

export const QuizContext = createContext({});

export const QuizProvider = ({children}) => {

    const [quiz, setQuiz] = useState(null);
    const [questions, setQuestions] = useState([]);

    const updateQuiz = (quiz) => {
        try {
            const parsedQuiz = JSON.parse(Buffer.from(quiz, "base64").toString("utf-8"));

            if (parsedQuiz.__format !== "BFS2QUIZ") throw new Error("Invalid quiz format");

            setQuiz(parsedQuiz.info);
            setQuestions(parsedQuiz.questions.sort(() => Math.random() - 0.5));
            return true;
        } catch (e) {
            setQuiz(null);
            return false;
        }
    }

    return (
        <QuizContext.Provider value={{quiz, updateQuiz, questions, setQuestions}}>
            {children}
        </QuizContext.Provider>
    )
}