import {createContext, useState} from "react";

export const QuizContext = createContext({});

export const QuizProvider = ({children}) => {

    const [quiz, setQuiz] = useState(null);

    const updateQuiz = (quiz) => {
        try {
            const parsedQuiz = JSON.parse(atob(quiz));

            if (parsedQuiz.__format !== "BFS2QUIZ") throw new Error("Invalid quiz format");

            setQuiz(parsedQuiz);
            return true;
        } catch (e) {
            setQuiz(null);
            return false;
        }
    }

    return (
        <QuizContext.Provider value={{quiz, updateQuiz}}>
            {children}
        </QuizContext.Provider>
    )
}