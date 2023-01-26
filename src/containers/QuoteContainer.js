import {useState, useEffect} from 'react'
import Quote from '../components/Quote';
const QuoteContainer = () =>{
    //need to fetch from api and return quote

    const [quotes, setQuotes] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://strangerthings-quotes.vercel.app/api/quotes");
            const data = await response.json() ;
            setQuotes(data);
            console.log(setQuotes);
        }
        fetchData()
    }, [])

    //using map to put all the quotes in one space 
    const quotesCollection = quotes.map(quote =>{
        return <Quote quote = {quote} />
    });

    return(
       quotes.length > 0 ? quotesCollection : <p>Loading quote</p>
    )
}
export default QuoteContainer;