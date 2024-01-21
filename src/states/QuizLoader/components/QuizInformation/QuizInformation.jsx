import "./styles.css";
import {QuizContext} from "@/common/contexts/QuizContext.jsx";
import {useContext} from "react";

export const QuizInformation = () => {
    const {quiz, questions} = useContext(QuizContext);

    if (quiz === null) return <></>;

    return (
        <div className="quiz-information">
            <h1>{quiz.title}</h1>
            <p>{quiz.description}</p>

            <div className="question-list">
                {questions.map((question, index) => (
                    <div className="question-item" key={index}>
                        <p className="question-circle">{index + 1}</p>
                        <p className="question-text">{question.title}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}