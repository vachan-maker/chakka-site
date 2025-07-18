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
        category: ['game','fun'],
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
        exturl:"https://love-calc-project.netlify.app/"
    },
    {
        id:7,
        name:"Random Text Generator",
        description: "Generate random text with AI",
        selfurl:"/random-text"
    }
]
function Services() {
    return (
        <>
            <div className="flex flex-col md:flex-row min-h-dvh">
                <div className="flex flex-col items-center justify-center  border-amber-300 border-r-2">
                    <Link href='/'>
                        <Image src={chakka} width={1024} height={1024} alt='Image of a jackfruit' className='w-75 md:w-75 mx-auto p-10' />
                    </Link>
                </div>
                <div className='min-h-dvh p-10'>
                    {services.map((service)=>{
                        return (<Link href={service.selfurl?service.selfurl:service.exturl} key={service.id}>
                            <div className='border border-amber-200 rounded-md p-5 hover:bg-base-300 cursor-pointer m-5 bg:base-300'>
                                <p>{service.name}</p>
                                <p>{service.description}</p>
                                {service.category?.map((cat,index)=>{
                                    return <div className='badge badge-soft badge-primary mr-2 mt-2' key={index}>{cat}</div>
                                })}
                            </div>
                        </Link>);
                    })}
                </div>
            </div>
        </>

    )
}

export default Services