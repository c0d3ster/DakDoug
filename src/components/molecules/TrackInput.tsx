import { Dispatch, FC, MouseEventHandler, SetStateAction, useRef } from 'react'

import { Track } from 'components/atoms'
import { AudioExtensions, AudioMimeTypes } from '@/types'

import '@/styles/Track.css'

export interface Props {
  handleUpload: MouseEventHandler<HTMLButtonElement>
  setTrack: Dispatch<SetStateAction<File | null>>
  track: File | null
}

export const TrackInput: FC<Props> = ({
  handleUpload,
  setTrack,
  track,
}) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null)
  const acceptedMedia = [...Object.values(AudioMimeTypes), ...Object.values(AudioExtensions)]
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()

    if (!hiddenFileInput.current) {
      return
    }

    hiddenFileInput.current.click()
  }

  const handleTrackChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      console.error('no file given')

      return
    }

    const files = [...Array.from(e.target.files)]

    console.log(files[0])

    setTrack(files[0])
  }

  return(
    <div className='track-input-wrapper'>
      { track 
        ? <Track track={track} />
        : <button onClick={handleClick}> Choose a track to upload</button> 
      } 
      <input
      ref={hiddenFileInput}
      accept={acceptedMedia.join(',')}
      onChange={handleTrackChange}
      multiple={false}
      type='file'
      />
      <button onClick={handleUpload} disabled={!track}>Upload</button>
    </div>
  )
}