import React, { useState } from "react"
import AddForm from "./components/addForm/AddForm"
import ResultList from "./components/resultList/ResultList";
import { useResults, IResultsContext, ResultsContext } from "./components/hooks/useResults";
import { IResult } from "./entities/result";


const App = () => {
  const { results, setResults } = useResults();
  
  return (
    <div>
      <h2>App</h2>
      <ResultsContext.Provider value={{results, setResults}}>
        <ResultList />
        <AddForm />  
      </ResultsContext.Provider>
    </div>
  )
}

export default App
