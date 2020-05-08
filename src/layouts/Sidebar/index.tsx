import React from 'react'
import './styles.scss'

import Balloon from '../../components/Balloon'

import profile from './profile.jpg'
import gmail from './gmail.svg'
import facebook from './facebook.svg'
import instagram from './instagram.svg'

interface State {
    copyBalloon: CopyBalloon
}

interface CopyBalloon {
    shown: boolean
    text: string
}

class Sidebar extends React.Component<{}, State> {
    _copyEmail: () => void
    _hoverEmail: () => void
    _hoverEmailLeave: () => void
    _openFb: () => void
    _openIg: () => void
    timeoutCopyBalloon: any
    email: string
    emailHoverText: string
    emailCopiedText: string
    
    constructor (props: any) {
        super(props)
        this.email = 'handy.wijaya.p@gmail.com'
        this.emailHoverText = 'Click to copy'
        this.emailCopiedText = 'Copied!'
        this._copyEmail = this.copyEmail.bind(this)
        this._hoverEmail = this.hoverEmail.bind(this)
        this._hoverEmailLeave = this.hoverEmailLeave.bind(this)
        this._openFb = this.openFb.bind(this)
        this._openIg = this.openIg.bind(this)

        this.timeoutCopyBalloon = null

        this.state = {
            copyBalloon: {
                shown: false,
                text: this.emailHoverText
            }
        }
    }

    copyEmail () {
        let textArea = document.createElement("input")
        textArea.style.position = 'fixed'
        textArea.style.top = '0px'
        textArea.style.left = 'calc( 100vw - 50%)'
        textArea.style.zIndex = '-999'

        textArea.value = this.email
        document.body.appendChild(textArea)

        textArea.focus();
        textArea.select();

        try {
            document.execCommand('copy')
            this.toggleCopyBalloon(true, this.emailCopiedText)

            this.timeoutCopyBalloon = setTimeout(() => {
                this.toggleCopyBalloon(false, this.emailCopiedText)
            }, 1500)
        } catch (err) {
            this.toggleCopyBalloon(true, 'Oops cannot copy :(')
        }
        
        if (textArea) {
            document.body.removeChild(textArea)
        }
    }

    hoverEmail () {
        this.toggleCopyBalloon(true, this.emailHoverText)
        if (this.timeoutCopyBalloon) {
            clearTimeout(this.timeoutCopyBalloon)
        }
    }

    hoverEmailLeave () {
        this.toggleCopyBalloon(false, this.emailHoverText)
        if (this.timeoutCopyBalloon) {
            clearTimeout(this.timeoutCopyBalloon)
        }
    }

    openFb () {
        window.open('https://www.facebook.com/handy.wijaya.p','_blank')
    }

    openIg () {
        window.open('https://www.instagram.com/handywijaya_/', '_blank')
    }

    toggleCopyBalloon (value: boolean, text: string) {
        let { copyBalloon } = { ...this.state }
        copyBalloon.shown = value
        copyBalloon.text = text
        this.setState({ copyBalloon })
    }

    render () {
        let { copyBalloon } = this.state
        return (
            <div className="Sidebar">
                <div className="Sidebar-title">About me</div>
                <div className="Sidebar-profpic">
                    <img className="Sidebar-profpic-img" src={profile} alt="profile" />
                    <div className="Sidebar-profpic-name">
                        Handy Wijaya
                    </div>
                </div>
                <div className="Sidebar-mail">
                    <div className="Sidebar-subtitle">Mail me</div>
                    <div className="Sidebar-mail-content">
                        <img className="Sidebar-mail-ic-gmail" src={gmail} alt="gmail" />
                        <div className="Sidebar-mail-content-email" onMouseOver={this._hoverEmail} onMouseLeave={this._hoverEmailLeave} onClick={this._copyEmail}>{this.email}</div>
                        <Balloon shown={copyBalloon.shown} text={copyBalloon.text} />
                    </div>
                </div>
                <div className="Sidebar-socmed">
                    <div className="Sidebar-subtitle">Follow me</div>
                    <img className="Sidebar-socmed-ic-fb" src={facebook} alt="facebook" onClick={this._openFb} />
                    <img className="Sidebar-socmed-ic-ig" src={instagram} alt="instagram" onClick={this._openIg} />
                </div>
            </div>
        )
    }
}

export default Sidebar