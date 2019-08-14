import React, { useState, useContext} from "react"
import { DatePicker, DayOfWeek, Slider, TextField, PrimaryButton } from 'office-ui-fabric-react';
import { ResultsContext } from "../hooks/useResults";

const AddForm = () => {
    const { results, setResults } = useContext(ResultsContext);

    const [ date, setDate ] = useState(new Date())
    const [ amount, setAmount ] = useState(45000)
    const [ note, setNote ] = useState("")

    const handleAddResult = () => {
        setResults([
            ...results,
            {
                date,
                amount,
                note
            }
        ])
    }

    return (
        <>
            <DatePicker onSelectDate={value => setDate(value)} label="Date" firstDayOfWeek={DayOfWeek.Monday} placeholder="Select a date..." ariaLabel="Select a date" value={date} />
            <Slider
                label="Amount"
                min={1}
                max={90000}
                step={1}
                value={amount}
                showValue={true}
                valueFormat={value => (Math.round(value / 100) / 10).toString()}
                onChange={value => { setAmount(value) }}
            />
            <TextField label="Note" value={note} onChange={(event, value) => setNote(value)} />
            <PrimaryButton
                text="Tallenna"
                onClick={handleAddResult}
            />
        </>
    )
}

export default AddForm