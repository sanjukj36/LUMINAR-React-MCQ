import React, { useState } from 'react'
import { Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';



function Html() {
  const [questions] = useState([
    {
      "question": "Which HTML tag is used to define a table?",
      "options": ["<table>", "<tb>", "<tr>", "<th>"],
      "correctAnswer": "<table>"
    },
    {
      "question": "Which tag is used to define an unordered list in HTML?",
      "options": ["<ul>", "<ol>", "<li>", "<ulist>"],
      "correctAnswer": "<ul>"
    },
    {
      "question": "Which attribute is used to provide an alternate text for an image in HTML?",
      "options": ["alt", "title", "src", "href"],
      "correctAnswer": "alt"
    },
    {
      "question": "Which HTML tag is used to define a hyperlink?",
      "options": ["<href>", "<a>", "<link>", "<hyperlink>"],
      "correctAnswer": "<a>"
    },
    {
      "question": "What does the HTML tag <br> stand for?",
      "options": ["Break", "Bold", "Background", "Bullet"],
      "correctAnswer": "Break"
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
  )
}

export default Html