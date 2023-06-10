
import { FC } from 'react'

import { formatFileSize } from '@/utils'

import '@/styles/Track.css'

export interface Props {
  track: File
}

export const Track: FC<Props> = ({
  track
}) => (
  <ul className='track-wrapper'>
    <li>
      <strong>Name: </strong> <span>{track.name}</span>
    </li>
    <li>
      <strong>Size: </strong> <span>{formatFileSize(track.size)}</span>
    </li>
  </ul>
)