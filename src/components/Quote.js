const Quote = ({quote}) => {

    return(
        <div className = "allQuotes">
            <h3> 
            {quote.quote}
            {quote.author} </h3> 
        </div>
         
    )
}
export default Quote;