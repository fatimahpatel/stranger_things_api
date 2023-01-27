import { useState } from "react";
const QuoteForm = ({filterFunction}) => {

    const [filteredNumber, setFilteredNumber] = useState("");

    const handleFormSubmit= (event) =>{
        event.preventDefault();
        filterFunction(filteredNumber);

        // fetchFilteredData(filteredNumber)
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="search-field">Filter for quotes: </label>
            <input type="text" id = "search-field"
            placeholder="number of quotes"
            name="numberOfQuotes"
            onChange = {(event) => setFilteredNumber(event.target.value)}
            value = {filteredNumber}/>

            <input type="submit"/>

        </form>
    )
}

export default QuoteForm;