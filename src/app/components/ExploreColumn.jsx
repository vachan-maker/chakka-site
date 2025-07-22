import localFont from "next/font/local";

const RIT_Kutty = localFont({
    src: '../../../fonts/RIT-Kutty-Bold.woff2',
    display: 'swap',
});
export default function ExploreColumn({children,title}) {
    return (
        <div className='p-10 flex flex-col gap-6'>
            <div className='md:min-h-42 flex items-center justify-center'>
                <h2 className={`${RIT_Kutty.className} text-center text-[#fcce0c] text-6xl p-5 md:text-6xl`}>{title}</h2>
            </div>
            {children}
        </div>
    )
}