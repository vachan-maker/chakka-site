import Link from 'next/link';
export default function Card({service}) {
    return (
        <Link href={service.selfurl || service.exturl}>
            <div className='border border-transparent hover:border-[#fcce0c] rounded-md p-5 hover:bg-base-300 cursor-pointer bg-base-300 m-2 hover:shadow-2xl hover:scale-105 duration-500 ease-in-out'>
                <div className="flex flex-row gap-2">
                <p className='font-bold mb-1.5'>{service.name}</p>
                {service.new && <div className="badge badge-soft badge-warning">new</div>}
                </div>
                <p>{service.description}</p>
                {service.creator && <p className='mb-2 mt-4 text-sm'><b>Created by:</b> {service.creator}</p>}
            </div>
        </Link>
    )
}
