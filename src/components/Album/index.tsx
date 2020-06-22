import React from 'react'
import './styles.scss'
import cn from 'classnames'

import { Collection, CollectionImage, CollectionImageType } from '../../interfaces/Collections'

interface Props {
  collection: Collection
  onOpenCollection: (collectionPath: string) => void
  isPreview: boolean
}

class Album extends React.PureComponent<Props> {
  public static defaultProps = {
      onOpenCollection: () => {},
      isPreview: false
  }

  openCollection (collectionId: string) {
    const { onOpenCollection } = this.props
    onOpenCollection('/collections/' + collectionId)
  }

  openImage (imageUrl: string) {
    window.open(imageUrl, '_blank')
  }

  renderFrames(collectionId: string, images: Array<CollectionImage>, maxImagePerRow: number, rowNumber: number) {
    let elements:Array<any> = []

    const startIndex = rowNumber * maxImagePerRow
    for (let i = startIndex; i < Math.min(images.length, startIndex + maxImagePerRow); i++) {
      const image = images[i]
      const alt = collectionId + "-" + (i+1)

      elements.push(
        <div key={i} className="Album-pages-row-frame">
          <img src={image.previewUrl}
            className={cn("Image", image.type === CollectionImageType.LANDSCAPE ? "Image-landscape" : "Image-portrait")}
            alt={alt}
            title={image.caption}
            onClick={() => {this.openImage(image.url)}} />
          <div className="Album-pages-row-frame-caption">{image.title}</div>
        </div>
      )
    }

    return elements
  }

  renderFrameRows (collection: Collection) {
    const { isPreview } = this.props
    let elements:Array<any> = []

    const maxImagePerRow = isPreview ? 2 : 3
    // 7 total image with 3 maxImagePerRow will have 2.333 totalRows
    const totalRows = isPreview ? 1 : collection.images.length / maxImagePerRow
    for (let i = 0; i < totalRows; i++) {
      elements.push(
        <div key={i} className="Album-pages-row">
          {
            this.renderFrames(collection.id, collection.images, maxImagePerRow, i)
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
    const { collection } = this.props
    return (
      <div className="Album">
        <div className="Album-title">{collection.title}</div>
        <div className="Album-caption">{collection.caption}</div>
        {
          this.renderPhotoBook(collection)
        }
      </div>
    )
  }
}

export default Album