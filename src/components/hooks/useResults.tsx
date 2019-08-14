import React, { useState } from "react"
import { IResult } from "../../entities/result";


export interface IResultsContext {
    results?: IResult[],
    setResults?: React.Dispatch<React.SetStateAction<IResult[]>>
}

export const useResults = () => {
    const [ results, setResults ] = useState<IResult[]>([])

    // const addResult = (result: IResult) => {
    //     setResults([...results, result])
    // }

    return { results, setResults }

}

export const ResultsContext = React.createContext<IResultsContext>({});