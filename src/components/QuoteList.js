import Quote from "./Quote"
const QuoteList = ({quotes}) => {
    //using map to put all the quotes in one space 
    
    const quotesCollection = quotes.map((quote, index) =>{
        return <Quote 
        key = {index}
        quote = {quote} />
    })

    return(
        <>
            <h3>Quotes from Stranger Things</h3>
            <hr/>
            {quotesCollection}
        
        </>
    )
}
export default QuoteList;