'use client'
import Image from "next/image";
import {useState,useRef} from "react";
function PomodoroTimer() {
    const [time,setTime] = useState(25*60);
    const [start,setStart] = useState(false);
    const intervalRef = useRef(null);

    const startTimer = () => {
        setStart(true);
        if(start){return;}
        intervalRef.current = setInterval(()=>{
            if(time>0) {
                setTime(prev => prev-1);
            }

            if(time === 0) {
                clearInterval(intervalRef.current);
            }
        },1000)

    }

    function formatTime(seconds) {
        const m = Math.floor((seconds/60)).toString().padStart(2, "0");
        const s = (seconds%60).toString().padStart(2, "0");
        return (`${m}:${s}`);

    }




    return (

        <>
            <div className="min-h-dvh bg-amber-100 flex flex-col items-center justify-around">
                <h1 className="text-4xl text-amber-600">Pomodoro Timer</h1>
                {!start && <Image src="/strawberry.png" alt="Image of a red strawberry" width={200} height={200}/>}
                {start && <div className="text-6xl font-bold text-amber-600">{formatTime(time)}</div>}
                <div className="flex flex-row gap-2">
                <button className="btn btn-xl" onClick={startTimer}>Start</button>
                <button className="btn btn-xl">End</button>
                </div>
            </div>
        </>
    )
}

export default PomodoroTimer