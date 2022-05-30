import * as React from 'react'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { canvasRGBA } from 'stackblur-canvas'

const drawImg = (
  canvas: HTMLCanvasElement,
  thumbnail: HTMLImageElement,
  blur: number
) => {
  const ctx = canvas.getContext('2d')
  if (ctx) {
    ctx.drawImage(thumbnail, 0, 0)
    canvasRGBA(canvas, 0, 0, ctx.canvas.width, ctx.canvas.height, blur)
  }
}

export interface IBlurryLoadingProps {
  width: CSSStyleDeclaration['width']
  height: CSSStyleDeclaration['height']
  imgSrc: string
  thumbnailSrc: string
  thumbnailWidth?: CSSStyleDeclaration['width']
  thumbnailHeight?: CSSStyleDeclaration['height']
  blur?: number
}

export function BlurryLoading({
  width,
  height,
  thumbnailSrc,
  imgSrc,
  blur = 10,
}: IBlurryLoadingProps) {
  const thumbnailRef = useRef<HTMLImageElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  const [canvasWidth, setCanvasWidth] = useState(10)
  const [canvasHeight, setCanvasHeight] = useState(20)
  const [loadedThumb, setLoadedThumb] = useState(false)

  useEffect(() => {
    const thumbnail = thumbnailRef.current
    const img = imageRef.current

    //处理缓存情况，img.complete为true时，不会触发onload事件
    if (thumbnail && thumbnail.complete && img && img.complete) {
      setLoadedThumb(true)
      img.style.opacity = '1'
      img.style.visibility = 'visible'
      console.log('image loaded')
    }
  }, [])

  useEffect(() => {
    const thumbnail = thumbnailRef.current

    if (thumbnail) {
      thumbnail.onload = () => {
        setCanvasWidth(thumbnail.width)
        setCanvasHeight(thumbnail.height)
        setLoadedThumb(true)
      }
    }
  }, [])

  useEffect(() => {
    if (loadedThumb) {
      const canvas = canvasRef.current
      const thumbnail = thumbnailRef.current
      if (canvas && thumbnail) {
        drawImg(canvas, thumbnail, blur)
      }
    }
  }, [loadedThumb, blur])

  useEffect(() => {
    const image = imageRef.current
    if (image) {
      image.onload = () => {
        const img = imageRef.current!
        img.style.opacity = '1'
        img.style.visibility = 'visible'
        console.log('image loaded')
      }
    }
  }, [imageRef])

  return (
    <div style={{ width, height }} className={`relative max-h-full max-w-full`}>
      <div className="absolute left-0 top-0 h-full w-full">
        <img
          src={thumbnailSrc}
          alt=""
          className="hidden object-cover"
          ref={thumbnailRef}
          crossOrigin="anonymous"
        />
        <canvas
          width={canvasWidth}
          height={canvasHeight}
          className="absolute top-0 left-0 h-full w-full object-cover"
          ref={canvasRef}
        ></canvas>
        <img
          src={imgSrc}
          alt=""
          className="duration-400 invisible absolute h-full w-full object-cover opacity-0 transition-all ease-in"
          ref={imageRef}
        />
      </div>
    </div>
  )
}
