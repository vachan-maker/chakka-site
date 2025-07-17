import chakka from '../../../public/chakka3.png'
import localFont from 'next/font/local';
import Image from 'next/image'
import Link from 'next/link';
const RIT_Kutty = localFont({
  src: '../../../fonts/RIT-Kutty-Bold.woff2',
  display: 'swap',
});
function Services() {
    return(
        <>
        <div className="flex flex-row min-h-dvh">
            <div className="flex flex-col items-center justify-center  border-amber-300 border-r-2">
                <Link href='/'>
                <Image src={chakka} width={1024} height={1024} alt='Image of a jackfruit' className='w-75 md:w-75 mx-auto p-10'/>
                </Link>
            </div>
            <div className='min-h-dvh p-10'>
                <Link href="/qrcode">
                <div className='border border-amber-200 rounded-md p-10 hover:bg-[#040a05] cursor-pointer'>
                    <p>QR Code Generator</p>
                </div>
                </Link>
                <Link href="/dice">
                <div className='border border-amber-200 rounded-md p-10 hover:bg-[#040a05] cursor-pointer'>
                    <p>Roll a Dice</p>
                </div>
                </Link>

            </div>
                        <div className='min-h-dvh p-10'>
                <Link href="https://nira20.vercel.app">
                <div className='border border-amber-200 rounded-md p-10 hover:bg-[#040a05] cursor-pointer'>
                    <p>Nira</p>
                    <p>Developed by Abhiram A.K</p>
                </div>
                </Link>

            </div>
        </div>
        </>
      
    )
}

export default Services