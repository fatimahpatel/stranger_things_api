import {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import About from '../components/About';
import Contact from '../components/Contact';
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
        <BrowserRouter>
            <h1>Stranger Things Quotes</h1>
                <ul>
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to = "/about">About</Link></li>
                    <li><Link to ="/contact">Contact</Link></li>
                </ul>

                <button>
                    <Link to ="/quotes">Quotes</Link>
                </button>



            <Routes>
                <Route path = "/about" element = {<About/>}/>
                <Route path = "/contact" element = {<Contact/>}/>
            </Routes>   
        
        </BrowserRouter>    
    )
}
export default QuoteContainer;