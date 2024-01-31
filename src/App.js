import { useEffect, useState } from "react";
import "./style.css"

function getRandomQuotes(quotes){

  return quotes[Math.floor(Math.random() * quotes.length)]

}

export default function App(){

  const [quotes, setQuotes] = useState([])
  const [quote, setQuote] = useState(null)

  useEffect(() => {

    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((json) => {

      setQuotes(json)
      setQuote(json[0])

    })

  }, [])

  function newQuote(){

    setQuote(getRandomQuotes(quotes))

  }

  return(

    <main>
      <h1>Project Quotes</h1>
      <section>
        <button onClick={newQuote}>New Quote</button>
        <h3>
          <span>"</span>
          {quote?.text}
        </h3>
        <i>- {quote?.author}</i>
      </section>
      
    </main>

  )


}
