"use client"
import { useState } from "react"
import Header from "@/app/components/Header";
function GenerateMotivation()
{
    return (
        <>
            <Header/>
            <section className="mx-auto my-0 p-5 max-w-lg">
                <h1 className="font-bold text-2xl text-center">Generate Random Text</h1>
                <form action="/api/motivation" method="POST">
                <div className="flex flex-col gap-5 items-center justify-center">
                    <input type="text" className="input w-full" name="motivation"/>
                    <textarea readOnly value={text}  className="textarea textarea-bordered w-full"></textarea>
                    <button className='btn btn-accent'>Generate Random Text</button>
                </div>
                </form>
            </section>
        </>
    )


}

export default GenerateMotivation