const Quote = ({quote}) => {

    return(
        <div className = "allQuotes">
            <p>"{quote.quote}" - {quote.author}</p> 
            
        </div>
         
    )
}
export default Quote;