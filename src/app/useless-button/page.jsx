'use client'
import {useState} from "react";
import {useRef} from "react";

export default function Page() {
    const buttonRef = useRef();
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);

    const handleClick = () => {
        const randomX = Math.floor(Math.random() * (window.innerWidth-100));
        const randomY = Math.floor(Math.random() * (window.innerHeight-100));
        setX(randomX);
        setY(randomY);
        if(buttonRef.current) {
            buttonRef.current.style.position = "absolute";
            buttonRef.current.style.left = x + "px";
            buttonRef.current.style.top = y + "px";
        }

    }
    return (
        <div className="bg-amber-400 min-h-100">
            <button onClick={handleClick} ref={buttonRef} className='bg-red-500 text-xl p-8 rounded-full shadow-xl hover:bg-red-600 cursor-pointer max-h-40 max-w-40'>Click Me!</button>

        </div>
    )
}