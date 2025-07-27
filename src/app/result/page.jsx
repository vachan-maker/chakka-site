'use client'
import {useSearchParams} from "next/navigation";
import ResultComponent from "../components/Result"
import {Suspense} from "react";
function Result() {
    const text = useSearchParams().get('text');
    const decodedText = decodeURI(text);
    console.log(decodedText);
    return(
        <Suspense>
            <ResultComponent text={decodedText}/>
        </Suspense>
    )
}

export default Result;