export interface Collections {
  [name: string]: Collection
}

export interface Collection {
  title: string
  caption: string
  collectionName: string
  imgNames: Array<string>,
  imgExtension: string
}