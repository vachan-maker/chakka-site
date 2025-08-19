"use client"
import { useState } from "react"
import Header from "@/app/components/Header";
function GenerateMotivation()
{
    return (
        <>
            <Header/>
            <section className="mx-auto my-0 p-5 max-w-lg">
                <h1 className="font-bold text-3xl text-center">Ignite</h1>
                <p className="text-xl text-center">Fuel your fire.🔥</p>
                <p className="text-xs text-center">Please wait a few minutes after pressing the button!</p>
                <form action="/api/motivation" method="POST" className = "mt-5">
                <div className="flex flex-col gap-5 items-center justify-center">
                    <textarea type="text" className="input w-full" name="motivation" required placeholder="What do you need motivation for?" rows={12}></textarea>
                    <button className='btn btn-accent'>Motivate me!</button>
                </div>
                </form>
            </section>
        </>
    )


}
export default GenerateMotivation
