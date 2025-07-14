import localFont from 'next/font/local';
const RIT_Kutty = localFont({
  src: '../../../fonts/RIT-Kutty-Bold.woff2',
  display: 'swap',
  variable: '--font-RIT-Kutty',
});
function Hero() {


    return (
        <>
        <section className="h-dvh bg-[radial-gradient(circle,_#1e4620_0%,_#143017_60%,_#000000_100%)] flex flex-col">
            <h1 className={`${RIT_Kutty.className} text-center text-[#fcce0c] text-9xl`}>നല്ല ഫ്രഷ് ചക്ക!</h1>
        </section>
        </>
    )
}
export default Hero