import React from 'react'
import './styles-popupMessage.scss'
import cn from 'classnames'

interface Props {
  show: boolean,
  message: string,
  mouseX: number,
  mouseY: number,
  bgColor: string
}

class PopupMessage extends React.Component<Props> {
  render () {
    const { show, message, mouseX, mouseY, bgColor } = this.props

    return (
      <div
        className={cn("PopupMessage", show ? "PopupMessage-showed" : "PopupMessage-hidden")}
        style={{top: (mouseY + 5) + 'px', left: (mouseX + 5) + 'px', background: 'linear-gradient(#fff, ' + bgColor + ')'}}>
        { message }
      </div>
    )
  }
}

export default PopupMessage