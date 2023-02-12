import React, {useState} from 'react';
import "./quizStyle.css";


const QuizComp = ()=>{
    let questionBank = [
        {
          Question:"What is the Capital of India?",
          AnswerText:[
            {Answer:"Delhi",isCorrect:true},
            {Answer:"Hyderabad",isCorrect:false},
            {Answer:"Visakhapatnam",isCorrect:false},
            {Answer:"Patna",isCorrect:false},
          ]
        },
        {
          Question:"Who is the Captain of Team India for ODI?",
          AnswerText:[
            {Answer:"MS Dhoni",isCorrect:false},
            {Answer:"Virat Kohli",isCorrect:false},
            {Answer:"Rohit Sharma",isCorrect:true},
            {Answer:"Hardik Pandya",isCorrect:false},
          ]
        },
        {
          Question:"Who hits more centuries in T20I?",
          AnswerText:[
            {Answer:"KL Rahul",isCorrect:false},
            {Answer:"Rohit Sharma",isCorrect:true},
            {Answer:"Virat Kohli",isCorrect:false},
            {Answer:"Suryakumar Yadav",isCorrect:false},
          ]
        },
        {
          Question:"What is LBW?",
          AnswerText:[
            {Answer:"Leg Before Wicket",isCorrect:true},
            {Answer:"Leg By Wicket",isCorrect:false},
            {Answer:"Leg Beyond Wicket",isCorrect:false},
            {Answer:"Leg Between Wicket",isCorrect:false},
          ]
        },
        {
          Question:"Who is national crush?",
          AnswerText:[
            {Answer:"Raashi Khanna",isCorrect:false},
            {Answer:"Rashmika Mandanna",isCorrect:true},
            {Answer:"Krithi Shetty",isCorrect:false},
            {Answer:"Anupama Parameswaran",isCorrect:false},
          ]
        },
      ]
      const [currentQuestion,setCurrentQuestion] = useState(0);
      const [score,setScore] = useState(0);
      const [showScore, setShowScore] = useState(false);
      const handleAnswerResponse = (isCorrect)=>{
        if(isCorrect){
          setScore(score+1);
        }
        const nextQuestion = currentQuestion + 1;
        if(nextQuestion<questionBank.length){
          setCurrentQuestion(nextQuestion);
        }
        else {
          setShowScore(true);
        }
      }
    
      const resetQuiz = ()=>{
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
      }
    return (
        <div className='app'>
            {showScore?(
                <div className='score-section'>
                    <h1>You have scored {score} out of {questionBank.length}</h1>
                <div>
                    <button type='submit' onClick={resetQuiz}>Play Again</button>
                </div>
                </div>
            ):(
                <div>
                <div className='question-section'>
                    <div className='question-count'>
                        <span>{currentQuestion}</span>/{questionBank.length}
                    </div>
                    <div className='question-text'>
                        {questionBank[currentQuestion].Question}
                    </div>
                </div>
                <div className='answer-section'>
                    {questionBank[currentQuestion].AnswerText.map((answer)=>(
                    <button onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                    ))}
                </div>
                </div>
            )}
        </div>
    )
}

export default QuizComp;