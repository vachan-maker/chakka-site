'use client'
import { useRouter } from 'next/navigation';
import localFont from 'next/font/local';
import chakka from '../../../public/chakka3.png'
import Image from 'next/image';
const RIT_Kutty = localFont({
  src: '../../../fonts/RIT-Kutty-Bold.woff2',
  display: 'swap',
});
function Hero() {
    const router = useRouter()

    return (
        <>
        <section className="h-dvh flex flex-col items-center justify-center mx-auto">
            <Image src={chakka} width={1024} height={1024} alt='Image of a jackfruit' className='w-75 md:w-90 mx-auto'/>
            <h1 className={`${RIT_Kutty.className} text-center text-[#fcce0c] text-8xl font-bold p-5 md:text-9xl`}>നല്ല ഫ്രഷ് ചക്ക!</h1>
            <button className='btn btn-outline border-[#fcce0c] btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl' onClick={() => router.push('/explore')}>Explore &rarr;</button>
        </section>
        </>
    )
}
export default Hero