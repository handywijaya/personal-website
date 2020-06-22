import React from 'react'
import './styles.scss'

import cn from 'classnames'

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

  backToHome () {
    const { history } = this.props
    history.push('/')
  }

  backToTop () {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0;
  }
  
  render () {
    return (
      <div className="Collection">
        <div className={cn("Collection-link", "Collection-home")} onClick={() => this.backToHome()}>Back to home</div>
        <Album collection={this.collection} />
        <div className={cn("Collection-link", "Collection-top")} onClick={() => this.backToTop()}>Back to top</div>
      </div>
    )
  }
}

export default Collection