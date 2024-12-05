/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'

interface Props {
  videoId: string
  thumbnailSrc: string
  scriptSrc: string
}
export const VideoPlayer = ({ videoId, thumbnailSrc, scriptSrc }: Props) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = scriptSrc
    script.async = true
    document.head.appendChild(script)

    // Cleanup script on component unmount
    return () => {
      document.head.removeChild(script)
    }
  }, [scriptSrc])

  return (
    <div
      id={videoId}
      style={{
        position: 'relative',
        width: '100%',
        padding: '56.25% 0 0',
      }}
    >
      <img
        id={`thumb_${videoId}`}
        src={thumbnailSrc}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
        alt="thumbnail"
      />
      <div
        id={`backdrop_${videoId}`}
        style={{
          WebkitBackdropFilter: 'blur(5px)',
          backdropFilter: 'blur(5px)',
          position: 'absolute',
          top: 0,
          height: '100%',
          width: '100%',
        }}
      />
    </div>
  )
}
