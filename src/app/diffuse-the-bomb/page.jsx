'use client'
import {useState,useEffect} from 'react';
const riddles = [
    {
        id:1,
        question: "What comes after 2,4,8,16,....?",
        answer:32
    },
    {
        id:2,
        question: "How many sides does a decagon have?",
        answer:10
    },
    {
        id:3,
        question: "What is the sum of the first 5 odd numbers",
        answer:25
    }
]
function DiffuseTheBomb() {
    const [time,setTime] = useState(60);
    const [currentIndex,setCurrentIndex] = useState(0);
    const [question,setQuestion] = useState(riddles[currentIndex]);

    const handleQuestion = () => {
        if(currentIndex < riddles.length) {
            setCurrentIndex(currentIndex + 1);
            setQuestion(riddles[currentIndex]);
        }
    }
    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(
                (prevTime)=>{
                    if(prevTime <= 1) {
                        clearInterval(interval);
                        return 0;
                    }
                    return prevTime -1;

                }
            )
        },1000)
    },[])
    return (
        <>
            <h1>{time}</h1>
            <div>
                <h1 className="text-2xl">{question.question}</h1>
                <button onClick={handleQuestion} value="Next Question">Next Question</button>
            </div>
            </>
    )
}

export default DiffuseTheBomb