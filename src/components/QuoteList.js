import Quote from "./Quote"
const QuoteList = ({quotes}) => {
    //using map to put all the quotes in one space 
    
    const quotesCollection = quotes.map(quote =>{
        return <Quote 
        key = {quote.id} 
        quote = {quote} />
    })

    return(
        <>
            <h3>List of quotes</h3>
            <hr/>
            {quotesCollection}
        
        </>
    )
}
export default QuoteList;