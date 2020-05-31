import React from 'react'
import './styles.scss'

import luxBali1 from './lux-bali-1.jpg'
import luxBali2 from './lux-bali-2.jpg'

class Home extends React.PureComponent {
  render () {
    return(
      <div className="Home">
        <div className="Home-adventure">
          <div className="Home-adventure-title">Luxury Bali - 2019</div>
          <div className="Home-adventure-caption">Traveling with my brother has never gone this far!</div>
          <div className="Home-adventure-collections">
            <div className="Home-adventure-collections-frame">
              <img src={luxBali1} className="Home-adventure-collections-frame-image" alt="luxury-bali-1" />
            </div>
            <div className="Home-adventure-collections-frame">
              <img src={luxBali2} className="Home-adventure-collections-frame-image" alt="luxury-bali-2" />
            </div>
            <div className="Home-adventure-collections-more">
              <div className="Home-adventure-collections-more-text" title="work in progress :p">
                Check our collections..
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Home