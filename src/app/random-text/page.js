"use client"
import { useEffect, useState } from "react"
import { QRCodeCanvas } from "qrcode.react"
function GenerateRandomText() {
    const [text,setText] = useState('')
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')

        const fetchText = async () => {
            setLoading(true)
            try {
                const response = await fetch('/api/random-text')
                const data = await response.json()
                setText(data.response)
            }
            catch(e) {
                setError(e)
            }
            finally {
                setLoading(false)
            }
            

        }
    return (
        <>
            <section className="mx-auto my-0 p-5 max-w-lg">
                <h1 className="font-bold text-2xl text-center">Generate Random Text</h1>
                <div className="flex flex-col gap-5 items-center justify-center">
                {loading && <h1>Loading...Please wait</h1>}
                <textarea readOnly value={text}  className="textarea textarea-bordered w-full"></textarea>
                <button className='btn btn-accent' onClick={fetchText} disabled={loading}>Generate Random Text</button>
                </div>
            </section>
        </>
    )


}

export default GenerateRandomText