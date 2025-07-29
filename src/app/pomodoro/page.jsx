'use client'
import Image from "next/image";
import {useState} from "react";
function PomodoroTimer() {
    const [time,setTime] = useState(25*60);
    const [start,setStart] = useState(0);


    return (

        <>
            <div className="min-h-dvh bg-amber-100 flex flex-col items-center justify-center">
                <h1 className="text-4xl text-amber-600">Pomodoro Timer</h1>
                <Image src="/strawberry.png" alt="Image of a red strawberry" width={200} height={200}/>
                <div className="flex flex-row gap-2">
                <button className="btn btn-xl">Start</button>
                <button className="btn btn-xl">End</button>
                </div>
            </div>
        </>
    )
}

export default PomodoroTimer