'use client'
import localFont from "next/font/local";
const RIT_Kutty = localFont({
    src: '../../../fonts/RIT-Kutty-Bold.woff2',
    display: 'swap',
});
import Image from "next/image"
import {useEffect, useState} from "react";
function PazhamCounter() {
    const [counter, setCounter] = useState(()=>{
        const saved = localStorage.getItem("count");
        const initialValue = JSON.parse(saved);
        return initialValue || 0;
    });

    const increaseCounter = () => {
        setCounter((prevCounter) => prevCounter + 1);
    }
    useEffect(() => {
        localStorage.setItem("count",JSON.stringify(counter));
    },[counter]);
    return (
        <>
            <div className='min-h-dvh bg-blue-200 flex flex-col items-center justify-evenly'>
                <div>
                <h1 className={`${RIT_Kutty.className} text-[#2c3e50] text-6xl md:text-8xl text-center`}>പഴം Counter</h1>
                    <p className='text-[#2c3e50] text-center'>Click the banana to increase the count!</p>
                </div>
                <div className='bg-white rounded-xl px-12 py-6 text-black text-2xl'>
                    {counter}
                </div>

                <Image src='/pazham.png' width={400} height={400} onClick={increaseCounter} className="active:animate-bounce" alt={"An image of banana"} />
            </div>
        </>
    )
}

export default PazhamCounter