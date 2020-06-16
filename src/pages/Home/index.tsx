import React from 'react'
import './styles.scss'

interface Collection {
  title: string
  caption: string
  collectionName: string
  imgNames: Array<string>,
  imgExtension: string
}

class Home extends React.PureComponent {
  collections: Array<Collection>

  constructor (props: any) {
    super(props)

    this.collections = []
    this.openImage = this.openImage.bind(this)

    this.initCollections()
  }

  initCollections () {
    this.collections = []
    this.collections.push({
      title: 'Luxury Bali - 2019',
      caption: 'Traveling with my brother has never gone this far!',
      collectionName: 'luxury-bali',
      imgNames: ['lux-bali-1', 'lux-bali-2'],
      imgExtension: 'jpg'
    })
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

  renderAlbum (collectionName: string, imgNames: Array<string>, imgExtension: string) {
    return (
      <div className="Home-adventure-album">
        {
          imgNames.map((imgName, i) => {
            return (
              <div key={i} className="Home-adventure-album-frame" onClick={() => {this.openImage(collectionName, this.getOriginalImageName(imgName, imgExtension))}}>
                <img src={"/assets/" + collectionName + "/" + this.getPreviewImageName(imgName, imgExtension)} className="Home-adventure-album-frame-image" alt={imgName} title="click to preview original picture" />
              </div>
            )
          })
        }
        <div className="Home-adventure-album-more">
          <div className="Home-adventure-album-more-text" title="work in progress :p">
            Full collection..
          </div>
        </div>
      </div>
    )
  }

  renderCollection (collection: Collection, key: number) {
    return (
      <div key={key} className="Home-adventure-collection">
        <div className="Home-adventure-title">{collection.title}</div>
        <div className="Home-adventure-caption">{collection.caption}</div>
        {
          this.renderAlbum(collection.collectionName, collection.imgNames, collection.imgExtension)
        }
      </div>
    )
  }

  render () {
    return(
      <div className="Home">
        <div className="Home-adventure">
          {
            this.collections.map((c, i) => this.renderCollection(c, i))
          }
          
        </div>
        
      </div>
    )
  }
}

export default Home