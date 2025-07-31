import {Suspense} from "react";
import ResultWrapper from "@/app/components/ResultWrapper";
function Result() {
    return(
        <Suspense fallback={<div>Loading</div>}>
            <ResultWrapper/>
        </Suspense>
    )
}

export default Result;