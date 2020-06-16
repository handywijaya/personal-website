import React from 'react'
import './styles.scss'

class Header extends React.PureComponent {
    render () {
        return (
            <div className="Header">
                <div className="Header-title">
                    Welcome! <span className="Header-snowflake">&#10052;</span>
                </div>
                <div className="Header-subtitle">
                    This site is a handicraft of a developer who falls to one of Disney Movie.<br />Can you guess the movie? <span>&#129488;</span>
                </div>
            </div>
        )
    }
}

export default Header