'use client'
import {useEffect, useState} from "react";
function DiffuseTheBomb() {
    const [time,setTime] = useState(30);
    useEffect(()=>{
        setInterval(()=>{
            setTime(prevTime => prevTime - 1);
        },1000)
    },[])
    return (
        <>
            <h1>{time}</h1>
        </>
    )
}

export default DiffuseTheBomb