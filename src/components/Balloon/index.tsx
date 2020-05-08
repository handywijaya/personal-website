import React from 'react'
import './styles.scss'
import cn from 'classnames'

interface Props {
  shown: boolean
  text: string
}

class Balloon extends React.PureComponent<Props, any> {
  render () {
    let { shown, text } = this.props

    return (
      <div className={cn("Balloon", shown ? "Balloon-showed" : "")}>
        <div className="Balloon-triangle" />
        <div className="Balloon-text">{text}</div>
      </div>
    )
  }
}

export default Balloon