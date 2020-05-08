import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import './styles.scss'

class Layout extends React.PureComponent {
    render () {
        return (
            <div className="Layout">
                <Header />
                <div className="Content">
                    <div className="Content-left">
                        { this.props.children }
                    </div>
                    <div className="Content-right">
                        <Sidebar />
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout