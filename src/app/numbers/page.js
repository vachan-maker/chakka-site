"use client";
import numeral from '../../../public/numerals.jpg'
import {useState } from "react"
import localFont from 'next/font/local';
import Image from 'next/image';
const manjari = localFont({
  src: '../../../fonts/Manjari-Regular.otf',
  display: 'swap',
});
const numbers = {
    '0':'൦',
    '1':'൧',
    '2':'൨',
    '3':'൩',
    '4':'൪',
    '5':'൫',
    '6':'൬',
    '7':'൭',
    '8':'൮',
    '9':'൯'
}

function Numbers() {
    const [input,setInput] = useState('')
    const [output,setOutput] = useState('')
    const handleChange = (e) => {
        const value = e.target.value
        setInput(value)

        const converted = value.split(' ').map((char) => numbers[char]).join('')

        setOutput(converted)


    }



    return (
        <>
        <section className="min-h-screen flex items-center justify-center flex-col gap-10">
            <h1 className="font-bold text-2xl text-center">English to Malayalam Numerals</h1>
            <div className="flex flex-col gap-5 items-center justify-center">
            <Image src={numeral} width={1000} height={1080} alt='Malayalam numerals' className='w-80'/>
            <input type="number" className={`${manjari.className} input input-primary text-lg`} value={input} onChange={handleChange}/>
            <input type="number" className={`${manjari.className} input input-success text-lg`} value={output} readOnly/>
            </div>
        </section>
        </>
    )
}

export default Numbers