'use client'
import Image from "next/image";
import {useState,useRef} from "react";
const WORK_TIME = 25 * 60;
const BREAK_TIME = 5 * 60;
function PomodoroTimer() {
    const [time,setTime] = useState(WORK_TIME);
    const [start,setStart] = useState(false);
    const intervalRef = useRef(null);
    const [rest,setRest] = useState(false);

    const startTimer = () => {
        setStart(true);
        if(intervalRef.current != null){return;}
        intervalRef.current = setInterval(()=>{
            setTime(prev => {
                if(prev <= 1) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                    setStart(false);
                    return 0;
                }
                return prev-1;
            })
        },1000)

    }
    const startBreak = () => {
        setRest(true);
        setTime(BREAK_TIME);
        startTimer();
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
                {start && <div className="text-6xl font-bold text-[#ea5951]">{formatTime(time)}</div>}

                    {time === 0 && !rest &&
                        <div className="flex flex-col gap-2">
                        <div className="text-4xl font-bold text-[#ea5951]">Start Break?</div>
                        <button className="btn" onClick={startBreak}>Let's Go!</button>

                    </div>}
                {!start && <button className="btn btn-xl" onClick={startTimer}>Start!</button>}



            </div>
        </>
    )
}

export default PomodoroTimer