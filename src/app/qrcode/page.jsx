"use client"
import { useState } from "react"
import { QRCodeCanvas } from "qrcode.react"
function QRCode() {
    const [input,setInput] = useState('')
    const [qrText, setQRText] = useState('')
    const handleChange = (e) => {
        const value = e.target.value
        setInput(value)
    }
    return (
        <>
            <section className="min-h-screen flex items-center justify-center flex-col gap-10">
                <h1 className="font-bold text-2xl text-center">QR Code Generator</h1>
                <p>Convert Text/URL to a QR Code. Press and Hold QR Code to save the QR Code.</p>
                <div className="flex flex-col gap-5 items-center justify-center">
                    {qrText && <QRCodeCanvas value={qrText} size={300}/>}
                    <input type="text" className={`input input-primary text-lg w-100`} value={input} onChange={handleChange}/>
                    <button className="btn btn-soft btn-primary w-100" onClick={()=>setQRText(input)}>Generate QR Code</button>
                </div>
            </section>
        </>
    )


}

export default QRCode