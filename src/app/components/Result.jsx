function Result(props) {
    return (        <div className='bg-[#f4ecd8] text-[#5b4636] min-h-dvh font-serif text-xl p-6'>
        <h1 className="text-4xl text-center font-bold mb-10">One Message. Infinite Strength.</h1>
        <p className='max-w-[65ch] my-0 mx-auto'>{props.decodedText}</p>
    </div>);
}

export default Result;