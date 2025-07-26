'use client'
import {useSearchParams} from "next/navigation";
import {Suspense} from "react";
function Result() {
    const text = useSearchParams().get('text');
    const decodedText = decodeURI(text);
    return(
        <Suspense>
        </Suspense>
    )
}

export default Result;