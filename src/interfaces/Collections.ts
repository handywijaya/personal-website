export interface Collections {
  [name: string]: Collection
}

export interface Collection {
  id: string
  title: string
  caption: string
  images: Array<CollectionImage>
}

export interface CollectionImage {
  title: string
  caption: string
  url: string
  previewUrl: string
  type: CollectionImageType
}

export enum CollectionImageType {
  LANDSCAPE,
  PORTRAIT
}