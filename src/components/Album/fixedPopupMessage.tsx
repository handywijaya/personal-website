import React from 'react'
import './styles-fixedPopupMessage.scss'

import PopupMessage from '../PopupMessage'

interface Props {
  show: boolean,
  message: string,
  mouseX: number,
  mouseY: number,
  bgColor: string
}

class FixedPopupMessage extends React.Component<Props> {
  render () {
    const { show, message, mouseX, mouseY, bgColor } = this.props

    return (
      <div className="FixedPopupMessage"
        style={{top: (mouseY + 5) + 'px', left: (mouseX + 5) + 'px'}}>
        <PopupMessage
          show={show}
          message={message}
          bgColor={'linear-gradient(#fff, ' + bgColor + ')'} />
      </div>
    )
  }
}

export default FixedPopupMessage