import React from 'react'
import './styles.scss'

import { Collection } from '../../interfaces/Collections'

import Constant from '../../utils/const'
import Album from '../../components/Album'

// need to pass <any> to get acccess props' values
class Home extends React.PureComponent<any> {
  collections: Array<Collection>

  constructor (props: any) {
    super(props)

    this.collections = []

    this.initCollections()
  }

  initCollections () {
    this.collections = []
    Object.keys(Constant.COLLECTIONS).forEach((collectionName: string) => {
      this.collections.push(Constant.COLLECTIONS[collectionName])
    })
  }

  openCollection (collectionPath: string) {
    console.log('this', this)
    const { history } = this.props
    history.push(collectionPath)
  }

  renderCollection (collection: Collection, key: number) {
    return (
      <Album
        key={key}
        collection={collection}
        onOpenCollection={(collectionPath) => this.openCollection(collectionPath)}
        isPreview />
    )
  }

  render () {
    return(
      <div className="Home">
        {
          this.collections.map((c, i) => this.renderCollection(c, i))
        }
      </div>
    )
  }
}

export default Home