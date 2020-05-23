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
    const data = [
      'May 19th, 2020;Being good is barely enough.;Handy Wijaya',
      'May 18th, 2020;Roses are flower too. Beauty.. in their way.;Handy Wijaya',
      'May 17th, 2020;Internet has become one of my primary. Is it too far already?;Handy Wijaya',
      'May 16th, 2020;God is great. No doubt;Handy Wijaya',
      'May 15th, 2020;Imagine talking with someone with soothing words, warming.. right?;Handy Wijaya',
      'May 15th, 2020;The way to talk, is worth to be mastered.;Handy Wijaya',
      'May 15th, 2020;A day without sun, maybe its just one of someone\'s darkest day.;Handy Wijaya',
      'May 15th, 2020;Mood is something you have to be taken seriously.;Handy Wijaya',
      'May 15th, 2020;As hard it may seem, keep on fighting. The rainbow comes after the thunderstorm.;Handy Wijaya',
      'May 15th, 2020;Resting is not always slacking.;Handy Wijaya',
      'May 14th, 2020;I was curious if turtle can jump.;Handy Wijaya',
      'May 13th, 2020;A very warm hug beats a thanks.;Handy Wijaya',
      'May 13th, 2020;Who needs quotes nowadays? Well, who cares, I will still do it.;Handy Wijaya'
    ]

    this.quotes = []
    data.forEach((d) => {
      const splitted = d.split(';')

      this.quotes.push({
        date: splitted[0],
        quote: splitted[1],
        author: splitted[2]
      })
    })
  }

  renderQuote (quote: Quote, index: number) {
    return (
      <div key={index} className="Home-content-quote">
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
            this.quotes.map((quote, i) => {
              return this.renderQuote(quote, i)
            })
          }
        </div>
      </div>
    )
  }
}

export default Home