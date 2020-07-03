import React from 'react'
import './styles.scss'
import cn from 'classnames'

import { Collection, CollectionImage, CollectionImageType } from '../../interfaces/Collections'

import PopupMessage from './fixedPopupMessage'

interface Props {
  collection: Collection
  onOpenCollection: (collectionPath: string) => void
  isPreview: boolean
}

class Album extends React.Component<Props, any> {
  public static defaultProps = {
      onOpenCollection: () => {},
      isPreview: false
  }
  popupTimeout?: NodeJS.Timeout

  constructor (props:any) {
    super(props)

    this.state = {
      popup: {
        show: false,
        caption: '',
        x: 0,
        y: 0,
        bgColor: 'white'
      }
    }
    this.popupTimeout = undefined
  }

  openCollection (collectionId: string) {
    const { onOpenCollection } = this.props
    onOpenCollection('/collections/' + collectionId)
  }

  openImage (imageUrl: string) {
    window.open(imageUrl, '_blank')
  }

  showPopup (caption: string, x: number, y: number, bgColor: string) {
    let { popup } = this.state
    popup.show = true
    popup.caption = caption
    popup.x = x
    popup.y = y
    popup.bgColor = bgColor
    this.setState({ popup })
  }

  hidePopup () {
    let { popup } = this.state
    popup.show = false
    this.setState({ popup })
  }

  onFrameHover (e:any, caption: string, bgColor: string) {
    this.onFrameOut()
    
    const x = e.clientX
    const y = e.clientY
    this.popupTimeout = setTimeout(() => {
      this.showPopup(caption, x, y, bgColor)
    }, 125)
  }

  onFrameOut () {
    if (this.popupTimeout) {
      clearTimeout(this.popupTimeout)
    }
    this.hidePopup()
  }

  getFrameElement (key: number, collectionId: string, url: string, previewUrl: string, caption: string, title: string, imageType: CollectionImageType, alt: string, bgColor:string) {
    return (
      <div key={key}
        className={cn("Album-pages-row-frame", "Frame-background-" + collectionId)}>
        <img src={previewUrl}
          onMouseMove={(e) => this.onFrameHover(e, caption, bgColor)}
          onMouseOut={() => this.onFrameOut()}
          className={cn("Image", imageType === CollectionImageType.LANDSCAPE ? "Image-landscape" : "Image-portrait")}
          alt={alt}
          onClick={() => {this.openImage(url)}} />
        <div className="Album-pages-row-frame-caption">{title}</div>
      </div>
    )
  }

  renderFrames(collectionId: string, images: Array<CollectionImage>, maxImagePerRow: number, rowNumber: number, popupColor: string) {
    let elements:Array<any> = []

    const startIndex = rowNumber * maxImagePerRow
    for (let i = startIndex; i < Math.min(images.length, startIndex + maxImagePerRow); i++) {
      const image = images[i]
      const alt = collectionId + "-" + (i+1)

      elements.push(this.getFrameElement(i, collectionId, image.url, image.previewUrl, image.caption, image.title, image.type, alt, popupColor))
    }

    return elements
  }

  renderPreviewFrames (collection: Collection) {
    let elements:Array<any> = []

    collection.previewImageIdx.forEach((idx, i) => {
      const image = collection.images[idx]
      const alt = collection.id + "-" + (i+1)

      elements.push(this.getFrameElement(i, collection.id, image.url, image.previewUrl, image.caption, image.title, image.type, alt, collection.popupColor))
    })

    return elements
  }

  renderFrameRows (collection: Collection) {
    const { isPreview } = this.props
    let elements:Array<any> = []

    if (isPreview) {
      return (
        <div className="Album-pages-row">
          {
            this.renderPreviewFrames(collection)
          }
        </div>
      )
    }

    const maxImagePerRow = isPreview ? 2 : 3
    // 7 total image with 3 maxImagePerRow will have 2.333 totalRows
    const totalRows = isPreview ? 1 : collection.images.length / maxImagePerRow
    for (let i = 0; i < totalRows; i++) {
      elements.push(
        <div key={i} className="Album-pages-row">
          {
            this.renderFrames(collection.id, collection.images, maxImagePerRow, i, collection.popupColor)
          }
        </div>
      )
    }

    return elements
  }

  renderPhotoBook (collection: Collection) {
    const { isPreview } = this.props
    return (
      <div className="Album-pages">
        {
          this.renderFrameRows(collection)
        }
        {
          isPreview && (
            <div className="Album-pages-more">
              <div className="Album-pages-more-text" onClick={() => {this.openCollection(collection.id)}}>
                Full collection..
              </div>
            </div>
          )
        }
      </div>
    )
  }

  render () {
    const { popup } = this.state
    const { collection } = this.props
    return (
      <div className="Album">
        <div className="Album-title">{collection.title}</div>
        <div className="Album-caption">{collection.caption}</div>
        {
          this.renderPhotoBook(collection)
        }
        <PopupMessage
          show={popup.show}
          message={popup.caption}
          mouseX={popup.x}
          mouseY={popup.y}
          bgColor={popup.bgColor} />
      </div>
    )
  }
}

export default Album