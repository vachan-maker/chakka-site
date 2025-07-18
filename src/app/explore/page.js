import chakka from '../../../public/chakka3.png'
import localFont from 'next/font/local';
import Image from 'next/image'
import Link from 'next/link';
const RIT_Kutty = localFont({
    src: '../../../fonts/RIT-Kutty-Bold.woff2',
    display: 'swap',
});
const services = [
    {
        id:1,
        name:"QR Code Generator",
        description:"Convert text/URL to QR Codes!",
        selfurl:"/qrcode"
    },
    {
        id:2,
        name:"Roll a dice!",
        description: "what the name says",
        selfurl:"/dice"
    },
    {
        id:3,
        name:"Nira",
        description: "A puzzle game",
        exturl:"https://nira20.vercel.app",
        category: ['fun'],
        created_by:'Abhiram A.K'
    },
    {
        id:4,
        name:"Space Hub",
        description: "Reach for the cosmos!",
        exturl:"https://vachan-maker.github.io/space-hub/index.html"
    },
    {
        id:5,
        name:"Business Card Creator",
        description:"Create a simple business card for yourself",
        exturl: "http://vachan-maker.github.io/business-card-creator/"
    },
    {
        id:6,
        name:"Lova Calculator",
        description:"Displays a love meter based on your crush",
        exturl:"https://love-calc-project.netlify.app/",
        category:['fun']
    },
    {
        id:7,
        name:"Random Text Generator",
        description: "Generate random text with AI",
        selfurl:"/random-text"
    },
    {
        id:8,
        name:"Chakka Paper Scissors",
        description: "A modern take on a classic game.",
        exturl:"https://chakka-paper-scissors.vercel.app/",
        category: ["fun"]
    },
    {
        id:9,
        name:"Whatsapp Chat Unknown Number",
        description: "Chat with anyone without saving them to your contacts",
        exturl:"https://wa-chat-number.pages.dev/"
    }
]
function Services() {
    return (
        <>
            <div className="flex flex-col md:flex-row min-h-dvh justify-around">
                <div className="flex flex-col items-center justify-center  border-amber-300 border-r-2">
                    <Link href='/'>
                        <Image src={chakka} width={1024} height={1024} alt='Image of a jackfruit' className='w-75 md:w-75 mx-auto p-10' />
                    </Link>
                </div>
                <div className='p-10 flex flex-col gap-6 max-w-lg'>
                    <h2 className={`${RIT_Kutty.className} text-center text-[#fcce0c] text-6xl p-5 md:text-6xl`}>ടൂൾസ്</h2>
                    {services.map((service)=>{
                        if(service.category!='fun'){
                        return(
                            <Link href={service.selfurl || service.exturl} key={service.id}>
                                <div className='border border-amber-200 rounded-md p-5 hover:bg-base-300 cursor-pointer bg-base-300 m-2'>
                                    <p className='font-bold mb-1.5'>{service.name}</p>
                                    <p>{service.description}</p>
                                </div>
                            </Link>
                        )}
                    })}
                </div>
                <div className='p-10 flex flex-col gap-6'>
                    <h2 className={`${RIT_Kutty.className} text-center text-[#fcce0c] text-6xl p-5 md:text-6xl`}>ഇതൊക്കെ ഒരു <br/>രസമല്ലേ!</h2>
                    <p>Some fun apps and games</p>
                    {services.map((service)=>{
                        if(service.category=='fun'){
                        return(
                            <Link href={service.selfurl || service.exturl} key={service.id}>
                                <div className='border border-amber-200 rounded-md p-5 hover:bg-base-300 cursor-pointer bg-base-300 m-2'>
                                    <p className='font-bold mb-1.5'>{service.name}</p>
                                    <p>{service.description}</p>
                                </div>
                            </Link>
                        )}
                    })}
                </div>
            </div>
        </>

    )
}

export default Services