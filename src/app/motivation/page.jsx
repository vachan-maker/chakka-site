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
                <form action="/api/motivation" method="POST">
                <div className="flex flex-col gap-5 items-center justify-center">
                    <textarea type="text" className="input w-full" name="motivation" required placeholder="What do you need motivation for?" cols={6}></textarea>
                    <button className='btn btn-accent'>Generate Random Text</button>
                </div>
                </form>
            </section>
        </>
    )


}

export default GenerateMotivation