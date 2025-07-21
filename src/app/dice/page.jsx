"use client"
import { useState } from "react"
import Header from "@/app/components/Header";
function Dice() {
    const [number,setNumber] = useState('')
    const rollDice = () =>
    {
        const value = Math.floor((Math.random()*6)+1)
        setNumber(value)
    }
    return (
        <>
            <Header/>
            <section className="min-h-screen flex items-center justify-center flex-col gap-10">
                <h1 className="font-bold text-3xl text-center">Roll a Dice🎲</h1>
                <div className="flex flex-col gap-5 items-center justify-center">
                    <h2 className="text-2xl">You rolled</h2>
                    <h3 className="text-4xl font-bold">{number}</h3>
                    <button className="btn btn-soft btn-primary w-100" onClick={()=>rollDice()}>Roll Dice</button>
                </div>
            </section>
        </>
    )


}

export default Dice