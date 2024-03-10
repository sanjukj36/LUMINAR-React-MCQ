import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ReactQ() {
    const [questions] = useState([

        {
            "question": "Which command is used to create a new React app?",
            "options": ["create-react-app", "new-react-app", "react-create", "build-react"],
            "correctAnswer": "create-react-app"
        },
        {
            "question": "What is JSX in React?",
            "options": ["JavaScript XML", "JavaScript Extensible", "JavaScript XML Syntax", "JavaScript X-ray"],
            "correctAnswer": "JavaScript XML"
        },
        {
            "question": "How do you pass data from a parent component to a child component in React?",
            "options": ["Props", "State", "Data Transfer Object", "setState"],
            "correctAnswer": "Props"
        },
        {
            "question": "What lifecycle method is invoked immediately after a component is mounted?",
            "options": ["componentWillMount", "componentDidMount", "componentWillUnmount", "componentDidUnmount"],
            "correctAnswer": "componentDidMount"
        },
        {
            "question": "Which hook is used to perform side effects in functional components?",
            "options": ["useEffect", "useReducer", "useState", "useContext"],
            "correctAnswer": "useEffect"
        }
    ]
    );
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false)

    const handleAnswerClick = (selectedOption) => {
        if (selectedOption === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);

        }
        setSelectedAnswer(selectedOption);

        setTimeout(() => {
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
                setSelectedAnswer('');
            } else {
                setResult(true);
            }
        }, 1000);

    };


    return (

        <>

    <Link to={"/"} style={{ textDecoration: "none"}} >
     <h3 className='mt-5 ms-3'>Home <i className="fa-solid fa-house"></i></h3>
     </Link>
            <Container>
                <div className='bg-white m-5 p-5 shadow rounded'>

                    {!result ? (

                        <>

                            <div>

                                <h1 className='text-center mb-4'><strong><u> Question -  {currentQuestion + 1} </u></strong>
                                </h1>
                                <h1 className='ms-2 mb-5'>{questions[currentQuestion].question}</h1>

                                <div className="d-flex text-center">

                                    {questions[currentQuestion].options.map((option, index) => (
                                        <div style={{ width: '300px' }} className='options pt-5 ps-2 pe-3' >
                                            <button className='btn border rounded button1' key={index} onClick={() => handleAnswerClick(option)} style={{ backgroundColor: selectedAnswer === option ? (option === questions[currentQuestion].correctAnswer ? 'green' : 'red') : 'white', width: '250px', marginBottom: '30px', height: '50px' }}
                                                disabled={selectedAnswer !== ''}>{option}
                                            </button>
                                        </div>

                                    ))}
                                </div>
                            </div>


                        </>
                    ) : (
                        <>

                            <div className="final-results">
                                <h1>Final Score</h1>
                                <h2>
                                    {score} out of {questions.length} correct - Mark is{" "}
                                    {((score / questions.length) * 100).toFixed(2)}%
                                </h2>
                                <button className='btn btn-danger ' onClick={() => window.location.reload()}>RESTART</button>
                            </div>


                        </>
                    )}
                </div>


            </Container>
        </>


    );

}

export default ReactQ
