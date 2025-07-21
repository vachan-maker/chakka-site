import Link from 'next/link'
function Header() {
    return (
        <header className='w-full bg-green-[#1d232a] px-2 py-1'>
            <p className='text-sm text-yellow-200'><Link href="/">&larr; Go Home</Link></p>

        </header>
    )
}

export default Header;