import { useState } from "react";

const Quiz = () => {
    const questionBank = [
        {
            question: 'What is the capital of France?',
            options: ['Berlin', 'London', 'Paris', 'Rome'],
            answer: 'Paris',
        },
        {
            question: 'Which language is used for web apps?',
            options: ['PHP', 'Python', 'Javascript', 'All'],
            answer: 'All',
        },
        {
            question: 'What does JSX stand for?',
            options: [
                'JavaScript XML', 
                'Java syntax extension', 
                'Just a simple eXample', 
                'None of the above'
            ],
            answer: 'JavaScript XML',
        },
    ];

    const initialAnswers = [null, null, null];

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [userAnswers, setUserAnswers] = useState(initialAnswers);

    function handleSelectedOption(option) {
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option;
        
        setUserAnswers(newUserAnswers);
    }

    function goToNext() {
        currentQuestion < 2 && setCurrentQuestion(currentQuestion + 1);
    }

    function goToPrevious() {
        currentQuestion > 0 && setCurrentQuestion(currentQuestion - 1);
    }

  return (
    <div>
        <h2>Question {currentQuestion + 1}</h2>
        <p className="question">{questionBank[currentQuestion].question}</p>

        {questionBank[currentQuestion].options.map((option) => (
            <button className='option' onClick={() => handleSelectedOption(option)}>{option}</button>
        ))}

        <div className="nav-buttons">
            <button onClick={goToPrevious}>Previous</button>
            <button onClick={goToNext}>Next</button>
        </div>
        
    </div>
  )
}

export default Quiz