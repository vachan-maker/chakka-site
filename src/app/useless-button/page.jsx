'use client'
import {useState} from "react";
import {useRef} from "react";
import Header from "@/app/components/Header";

export default function Page() {
    const buttonRef = useRef();
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);
    const [fun,setFun] = useState("Click here!");
    const [count,setCount] = useState(0);
    const handleClick = () => {
        const randomX = Math.floor(Math.random() * (window.innerWidth-200));
        const randomY = Math.floor(Math.random() * (window.innerHeight-200));
        const funList = ['Ivide njekku😶‍🌫️','ayye pattiche🤭','ingottu','njan ivide🙂‍↔️','veendum pattiche','😈I can do this all day','njan scene alle!🤣','🤣Hehehe','🙂‍↔️ Tada!','Kooi!🥸','Potte saramilla🥲','Machane...ivide😏','i am unstoppable!']
        const random = Math.floor(Math.random() * funList.length);
        increment();
        setFun(funList[random]);
        setX(randomX);
        setY(randomY);
        if(buttonRef.current) {
            buttonRef.current.style.position = "absolute";
            buttonRef.current.style.left = x + "px";
            buttonRef.current.style.top = y + "px";
        }

    }
    const increment = () => {
        setCount(count+1);
    }
    return (
        <>
        <Header/>
        <div className="bg-gradient-to-r from-amber-500 to-amber-300 min-h-dvh">
            <h1 className='text-center text-6xl font-bold p-3 mb-10'>Useless Button!</h1>
            <p className='text-center'>So far you pressed the button:<span className='bg-amber-900 text-white px-6 py-6 rounded-lg'>{count}</span> times</p>
            <button onClick={handleClick} ref={buttonRef} className='bg-gradient-to-r from-red-600 to-pink-400 text-xl rounded-full shadow-xl hover:bg-red-600 cursor-pointer px-4 py-6 animate-bounce'>{fun}</button>

        </div>
            </>
    )
}