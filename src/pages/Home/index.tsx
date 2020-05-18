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
      date: 'May 15th, 2020',
      quote: 'Imagine talking with someone with soothing words, warming.',
      author: 'Handy Wijaya'
    })
    this.quotes.push({
      date: 'May 15th, 2020',
      quote: 'The way to talk, is worth to be mastered.',
      author: 'Handy Wijaya'
    })
    this.quotes.push({
      date: 'May 15th, 2020',
      quote: 'A day without sun, maybe its just one of someone\'s darkest day.',
      author: 'Handy Wijaya'
    })
    this.quotes.push({
      date: 'May 15th, 2020',
      quote: 'Mood is something you have to be taken seriously.',
      author: 'Handy Wijaya'
    })
    this.quotes.push({
      date: 'May 15th, 2020',
      quote: 'Am I wrong to try to re-establish a broken bridge with old acquaintances?',
      author: 'Handy Wijaya'
    })
    this.quotes.push({
      date: 'May 15th, 2020',
      quote: 'Resting is not always slacking, right?',
      author: 'Handy Wijaya'
    })
    this.quotes.push({
      date: 'May 14th, 2020',
      quote: 'I was curious if turtle can jump.',
      author: 'Handy Wijaya'
    })
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
          Disclaimer:<br />You may find some quotes here, some are inspirational, some are just random, whether you like it or not. Brace yourself if you decide to scroll down.
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