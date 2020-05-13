import React from 'react'
import './styles.scss'

interface Quote {
  date: string
  quote: string
  author: string
}

class Home extends React.Component {
  quotes: Array<Quote>

  constructor (props: any) {
    super(props)
    this.quotes = []

    this.initQuotes()
  }

  initQuotes () {
    this.quotes = []
    
    this.quotes.push({
      date: 'May 13th, 2020',
      quote: 'A very warm hug beats a thanks.',
      author: 'Handy Wijaya'
    })
    this.quotes.push({
      date: 'May 13th, 2020',
      quote: 'Who needs quotes nowadays? Well, who cares, I will still do it.',
      author: 'Handy Wijaya'
    })
  }

  renderQuote (quote: Quote) {
    return (
      <div className="Home-content-quote">
        <div className="Home-content-quote-date">
          {quote.date}
        </div>
        <div className="Home-content-quote-q">
          {quote.quote}&nbsp;<span className="Home-content-quote-author">- {quote.author}</span>
        </div>
      </div>
    )
  }
  render () {
    return (
      <div className="Home">
        <div className="Home-disclaimer">
          Disclaimer:<br />You may find some quotes here, some are inspirational, some are just random, whether you like it or not. Brace yourself if you decided to scroll down.
        </div>
        <div className="Home-content">
          {
            this.quotes.map((quote) => {
              return this.renderQuote(quote)
            })
          }
        </div>
      </div>
    )
  }
}

export default Home