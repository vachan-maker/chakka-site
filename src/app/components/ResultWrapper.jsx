'use client';

import { useSearchParams } from "next/navigation";
import Result from "@/app/components/Result";

export default function ResultWrapper() {
    const text = useSearchParams().get('text') || '';
    const decodedText = decodeURI(text);
    console.log(decodedText);

    return(<>
        <Result text={decodedText} />
        </>);
}