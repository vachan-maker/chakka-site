'use client'
import confetti from 'canvas-confetti';
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
    const handleClick = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
 
    const randomInRange = (min, max) =>
      Math.random() * (max - min) + min;
 
    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();
 
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
 
      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

    return (
        <>
        <section className="h-dvh flex flex-col items-center justify-center mx-auto">
            <Image src={chakka} width={1024} height={1024} alt='Image of a jackfruit' className='w-75 md:w-90 mx-auto'/>
            <h1 className={`${RIT_Kutty.className} text-center text-[#fcce0c] text-8xl font-bold p-5 md:text-9xl`}>നല്ല ഫ്രഷ് ചക്ക!</h1>
            <div className='flex flex-col md:flex-row gap-5'>
            <button className='btn btn-outline border-[#fcce0c] btn-xl' onClick={() => router.push('/explore')}>Explore &rarr;</button>
            <button className='btn btn-outline border-[#fcce0c] btn-xl' onClick={() => handleClick()}>Adi Pookutty!!</button>
            </div>
        </section>
        </>
    )
}
export default Hero