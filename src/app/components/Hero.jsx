import localFont from 'next/font/local';
import chakka from '../../../public/chakka3.png'
import Image from 'next/image';
const RIT_Kutty = localFont({
  src: '../../../fonts/RIT-Kutty-Bold.woff2',
  display: 'swap',
});
function Hero() {


    return (
        <>
        <section className="h-dvh bg-[radial-gradient(circle,_#1e4620_0%,_#143017_60%,_#000000_100%)] flex flex-col items-center justify-center mx-auto">
            <Image src={chakka} width={1024} height={1024} alt='Image of a jackfruit' className='w-75 md:w-90 mx-auto'/>
            <h1 className={`${RIT_Kutty.className} text-center text-[#fcce0c] text-8xl font-bold p-5 md:text-9xl`}>നല്ല ഫ്രഷ് ചക്ക!</h1>
        </section>
        </>
    )
}
export default Hero