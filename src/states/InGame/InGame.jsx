import "./styles.css";
import {useContext, useEffect, useState} from "react";
import {QuizContext} from "@/common/contexts/QuizContext.jsx";
import Background from "@/states/WaitingRoom/components/Background";
import {Question} from "@/states/WaitingRoom/components/Question/Question.jsx";
import SCAnswer from "@/states/WaitingRoom/components/SingleChoiceAnswer";
import {socket} from "@/common/util/socket.js";

export const InGame = ({setState}) => {

    const {questions, setQuestions} = useContext(QuizContext);
    const [question, setQuestion] = useState(null);

    const nextQuestion = async () => {
        console.log(questions)

        setQuestions(questions => {
            const [question, ...rest] = questions;

            if (!question) {
                setState("ending");
                return;
            }

            setQuestion(question);

            const questionRelevantData = {
                title: question.title,
                type: question.type,
                answers: question.answers
            }

            socket.emit("SHOW_QUESTION", {question: questionRelevantData, solution: question.correctAnswer}, () => {
                console.log("Question sent");
            });

            return rest;
        })
    }

    useEffect(() => {
        const firstAction = setTimeout(() => nextQuestion(), 2000);

        const interval = setInterval(() => {
            socket.emit("SKIP_QUESTION", {}, () => {
                console.log("Question skipped");
                setTimeout(() => nextQuestion(), 3000);
            });
        }, 16000);

        return () => {
            clearTimeout(firstAction);
            clearInterval(interval);
        }
    }, []);

    if (question === null) return <></>;

    return (
        <div className="game-page">
            <div className="game-page">
                <Question title={question.title}/>

                {question.type === "SINGLE_CHOICE" && <div className="sc-answers-container">
                    {question.answers.map((answer, index) => (
                        <SCAnswer answer={answer} key={index} />
                    ))}
                </div>}
            </div>
            <Background/>
        </div>
    );
}