import Link from 'next/link';
export default function Card(service) {
    return (
        <Link href={service.selfurl || service.exturl} key={service.id}>
            <div className='border border-amber-200 rounded-md p-5 hover:bg-base-300 cursor-pointer bg-base-300 m-2'>
                <p className='font-bold mb-1.5'>{service.name}</p>
                <p>{service.description}</p>
                {service.creator && <p className='mb-2 mt-4 text-sm'><b>Created by:</b> {service.creator}</p>}
            </div>
        </Link>
    )
}