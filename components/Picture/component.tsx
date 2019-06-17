import * as React from 'react'

type SourceItem = {
  sizes?: string,
  src: string,
  srcset?: string,
  media?: string,
  type?: string
}

type Image = {
  alt: string,
  height?: number,
  width?: number,
  srcset?: string,
  fallbackImage?: Element,
  sizes?: string,
  src: string,
}

interface IProps {
  sources: [SourceItem]
  imageProps: Image
}

const getUniqId = () => (Math.floor(Math.random() * Math.pow(2, 64))).toString(16)

const PictureComponent = ({
  sources,
  imageProps
}: IProps) => {
  return (
    <picture>
      {sources.map(sourceProps => <source key={getUniqId()} {...sourceProps} />)}
      <img {...imageProps}/>
    </picture>
  )
}

export { PictureComponent }
