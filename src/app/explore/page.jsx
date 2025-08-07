'use client'
import chakka from '../../../public/chakka3.png'
import localFont from 'next/font/local'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect } from "react"
import Card from "@/app/components/Card"
import ExploreColumn from "@/app/components/ExploreColumn";
import services from "@/app/data/data.json"

import { SiGithub } from '@icons-pack/react-simple-icons';

const RIT_Kutty = localFont({
    src: '../../../fonts/RIT-Kutty-Bold.woff2',
    display: 'swap',
});

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
                <div className="flex flex-col items-center gap-20 md:border-amber-300 md:border-r-2">
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
