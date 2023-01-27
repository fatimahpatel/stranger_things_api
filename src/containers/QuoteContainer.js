import {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import About from '../components/About';
import Contact from '../components/Contact';
import Quote from '../components/Quote';
import QuoteList from '../components/QuoteList';
import QuoteForm from '../components/QuoteForm';

const QuoteContainer = () =>{
    //need to fetch from api and return quote
    const [quotesFromApi, setQuotesFromApi] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://strangerthings-quotes.vercel.app/api/quotes/106");
            const data = await response.json() ;
            setQuotesFromApi(data);
        }
        fetchData();
    }, [])




    const [filteredQuotes, setFilteredQuotes] = useState([]);
        const getFilteredData = async (filteredNumber) => {
            const response = await fetch(`https://strangerthings-quotes.vercel.app/api/quotes/${filteredNumber}`)
            const data = await response.json();
            setFilteredQuotes(data);
            // console.log("hello");
        }

 
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
                <button>
                    <Link to ="/filtered-quotes">Filtered Quotes</Link>
                </button>
              

            <Routes>
                <Route path = "/about" element = 
                {<About/>}
                />

                <Route path = "/contact" element=
                {<Contact/>}
                />

                <Route path = "/quotes" element = 
                {<QuoteList
                quotes = {quotesFromApi}/>}
                />

                <Route path = "/filtered-quotes" element = 
                {<>
                    <QuoteForm
                    filterFunction={getFilteredData} />
                    <QuoteList
                    quotes = {filteredQuotes}/>
                    
                    
                    
                    </>
                
                }
                />


            </Routes>   
        
        </BrowserRouter>   
    )
}
export default QuoteContainer;