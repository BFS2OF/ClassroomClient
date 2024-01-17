import "./styles.css";
import {QuizContext} from "@/common/contexts/QuizContext.jsx";
import {useContext} from "react";

export const QuizInformation = () => {
    const {quiz} = useContext(QuizContext);

    if (quiz === null) return <></>;

    return (
        <div className="quiz-information">
            <h1>{quiz.info.title}</h1>
            <p>{quiz.info.description}</p>

            <div className="question-list">
                {quiz.questions.map((question, index) => (
                    <div className="question-item" key={index}>
                        <p className="question-circle">{index + 1}</p>
                        <span className="question-text">{question.title}</span>
                    </div>
                ))}

                <main style={{height: "50rem"}}>

                </main>
            </div>

        </div>
    );
}