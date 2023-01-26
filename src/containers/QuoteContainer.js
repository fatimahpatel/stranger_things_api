import {useState, useEffect} from 'react'
import Quote from '../components/Quote';
import QuoteList from '../components/QuoteList';
const QuoteContainer = () =>{
    //need to fetch from api and return quote
    const [quotesFromApi, setQuotesFromApi] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://strangerthings-quotes.vercel.app/api/quotes/106");
            const data = await response.json() ;
            setQuotesFromApi(data);
            console.log(setQuotesFromApi);
        }
        fetchData()
    }, [])

 
    return(
        <QuoteList quotes = {quotesFromApi}/>
    )
}
export default QuoteContainer;