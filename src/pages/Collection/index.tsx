import React from 'react'
import './styles.scss'

import { Collection as C } from '../../interfaces/Collections'

import Constant from '../../utils/const'
import Album from '../../components/Album'

class Collection extends React.PureComponent<any> {
  collection: C

  constructor (props: any) {
    super(props)

    this.collection = {} as C
    this.validateRoutes(props)
  }

  validateRoutes(props: any) {
    const { collectionName } = props.match.params
    this.collection = Constant.COLLECTIONS[collectionName]

    if (!this.collection) {
      const { history } = props
      history.goBack()
    }
  }
  
  render () {
    return (
      <div className="Collection">
        <Album
          collection={this.collection} />
      </div>
    )
  }
}

export default Collection