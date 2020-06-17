import React from 'react'
import './styles.scss'

import { Collection } from '../../interfaces/Collections'

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

  openCollection (collectionName: string) {
    const { onOpenCollection } = this.props
    console.log('this.props 32', this.props)
    onOpenCollection('/collections/' + collectionName)
  }

  openImage (collectionName: string, imgName: string) {
    window.open('/assets/' + collectionName + '/' + imgName, '_blank')
  }

  getOriginalImageName (imgName: string, imgExtension: string) {
    return imgName + '.' + imgExtension
  }

  getPreviewImageName (imgName: string, imgExtension: string) {
    return imgName + '-prev.' + imgExtension
  }

  renderPhotoBook (collectionName: string, imgNames: Array<string>, imgExtension: string) {
    const { isPreview } = this.props
    return (
      <div className="Album-pages">
        {
          imgNames.map((imgName, i) => {
            return (
              <div key={i} className="Album-pages-frame" onClick={() => {this.openImage(collectionName, this.getOriginalImageName(imgName, imgExtension))}}>
                <img src={"/assets/" + collectionName + "/" + this.getPreviewImageName(imgName, imgExtension)} className="Album-pages-frame-image" alt={imgName} title="click to preview original picture" />
              </div>
            )
          })
        }
        {
          isPreview && (
            <div className="Album-pages-more">
              <div className="Album-pages-more-text" onClick={() => {this.openCollection(collectionName)}}>
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
          this.renderPhotoBook(collection.collectionName, collection.imgNames, collection.imgExtension)
        }
      </div>
    )
  }
}

export default Album