'use client'
import chakka from '../../../public/chakka3.png'
import localFont from 'next/font/local'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect } from "react"
import Card from "@/app/components/Card"
import ExploreColumn from "@/app/components/ExploreColumn";


import { SiGithub } from '@icons-pack/react-simple-icons';

const RIT_Kutty = localFont({
    src: '../../../fonts/RIT-Kutty-Bold.woff2',
    display: 'swap',
});

const services = [
    { id: 1, name: "QR Code Generator", description: "Convert text/URL to QR Codes!", selfurl: "/qrcode" },
    { id: 2, name: "Roll a dice!", description: "what the name says", selfurl: "/dice", category: ['fun'] },
    { id: 3, name: "Nira", description: "A puzzle game", exturl: "https://nira20.vercel.app", category: ['fun'], creator: 'Abhiram A.K' },
    { id: 4, name: "Space Hub", description: "Reach for the cosmos!", exturl: "https://vachan-maker.github.io/space-hub/index.html" },
    { id: 5, name: "Business Card Creator", description: "Create a simple business card for yourself", exturl: "https://vachan-maker.github.io/business-card-creator/" },
    { id: 6, name: "Lova Calculator", description: "Displays a love meter based on your crush", exturl: "https://love-calc-project.netlify.app/", category: ['fun'] },
    { id: 7, name: "Random Text Generator", description: "Generate random text with AI", selfurl: "/random-text" },
    { id: 8, name: "Chakka Paper Scissors", description: "A modern take on a classic game.", exturl: "https://chakka-paper-scissors.vercel.app/", category: ["fun"], creator: "Abhiram A.K" },
    { id: 9, name: "Whatsapp Chat Unknown Number", description: "Chat with anyone without saving them to your contacts", exturl: "https://wa-chat-number.pages.dev/" },
    { id: 10, name: "പഴം Counter", description: "Increase the count of bananas", selfurl: "/pazham-counter", category: ["fun"] },
    { id: 11, name: "Chakka Facts", description: "Get a random fact about Jackfruit", exturl: "https://sanaashraf6666.github.io/Chakka-Facts/", category: ["fun"], creator: "Sana Ashraf" },
    { id:12, name:"Useless Button", description: "Chumma oru potta button...!",selfurl: "/useless-button",category: ["fun"]}
];

services.sort((a, b) => a.name.localeCompare(b.name));

export default function Services() {
    const [playing, setPlaying] = useState(false);
    const audioRef = useRef(null);

    const playAudio = () => {
        if (!audioRef.current) {
            const audio = new Audio('/audio.mp3');
            audioRef.current = audio;
            audioRef.current.currentTime = 110;
            audioRef.current.play();
            setPlaying(true);
        }
    }

    const stopAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setPlaying(false);
            audioRef.current = null;
        }
    }

    useEffect(() => {
        return () => {
            stopAudio();
        };
    }, []);

    return (
        <>
            <div className="flex flex-col md:flex-row min-h-dvh justify-around">
                <div className="flex flex-col items-center gap-20 border-amber-300 border-r-2">
                    <Link href='/'>
                        <Image
                            src={playing ? `/chakka-mascot.png` : chakka}
                            width={512}
                            height={768}
                            alt='Image of a jackfruit'
                            className='w-75 md:w-75 mx-auto p-10'
                        />
                    </Link>
                    <Link href='https://github.com/vachan-maker/chakka-site'>
                    <SiGithub size={32} className='hover:text-yellow-300'/>
                    </Link>
                    <button
                        className={`${RIT_Kutty.className} btn btn-outline border-[#fcce0c] btn-xl`}
                        onClick={playAudio}
                    >
                        ഒരു പാട്ട് ഇട് മച്ചാനെ
                    </button>
                    {playing && (
                        <button
                            className={`${RIT_Kutty.className} btn btn-outline border-[#fcce0c] btn-xl`}
                            onClick={stopAudio}
                        >
                            Onnu off akkaamo!
                        </button>
                    )}
                </div>

                <ExploreColumn title={'ടൂൾസ്'}>
                    {services.filter((service)=> !service.category?.includes('fun')).map((service)=>{
                        return (
                            <Card service={service} key={service.id} />
                        )
                    })}
                </ExploreColumn>
                <ExploreColumn title={'ഇതൊക്കെ ഒരു\n' +
                    'രസമല്ലേ!'}>
                    {services.filter((service)=> service.category?.includes('fun')).map((service)=>{
                        return (
                            <Card service={service} key={service.id} />
                        );
                    })}
                </ExploreColumn>
            </div>
        </>
    )
}
