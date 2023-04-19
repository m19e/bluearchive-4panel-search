import NextImage from "next/image"
import type { ImageProps } from "next/image"

export const Image = ({ className, ...imageProps }: ImageProps) => {
    return (
      <div className={`relative ${className}`}>
        <NextImage {...imageProps} layout="fill" objectFit="contain" />
      </div>
    )
  }