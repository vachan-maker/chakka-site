'use client'
import Image from "next/image";
import {useState,useRef} from "react";
const WORK_TIME = (1/4) * 60;
const BREAK_TIME = (1/2) * 60;
function PomodoroTimer() {
    const [time,setTime] = useState(WORK_TIME);
    const [running,setRunning] = useState(false);
    const intervalRef = useRef(null);
    const [rest,setRest] = useState(false);

    const startTimer = () => {
        setRunning(true);
        if(intervalRef.current != null){return;}
        intervalRef.current = setInterval(()=>{
            setTime(prev => {
                if(prev <= 1) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                    setRunning(false);

                    if(!rest) {
                        setRest(true);
                        setTime(BREAK_TIME);
                        console.log("REST:", rest)
                    }
                    else {
                        setRest(false);
                        setTime(WORK_TIME);
                        console.log("REST:", rest)
                    }
                    return 0;
                }
                return prev-1;
            })
        },1000)

    }

    const handleClick = () => {
        if(!running){
            if(time === 0) {
                if (rest) {
                    setTime(WORK_TIME);
                } else {
                    setTime(BREAK_TIME);
                }
                startTimer();
            }

        }
        setTime(WORK_TIME);
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
                {!running && <Image src="/strawberry.png" alt="Image of a red strawberry" width={200} height={200}/>}
                {running && <div className="text-6xl font-bold text-[#ea5951]">{formatTime(time)}</div>}
                {time === 0 && !rest && rest && (<div className="flex flex-col gap-2">
                    <div className="text-4xl font-bold text-[#ea5951]">Start Break?</div>

                </div>)}
                {!running && <button className="btn btn-xl" onClick={handleClick}>Start!</button>}



            </div>
        </>
    )
}

export default PomodoroTimer