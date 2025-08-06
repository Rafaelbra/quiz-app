
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

  return (
    <div>
        <h2>Question 1</h2>
        <p className="question">{questionBank[0].question}</p>

        {questionBank[0].options.map((option) => (
            <butto className='option'>{option}</butto>
        ))}
        
    </div>
  )
}

export default Quiz