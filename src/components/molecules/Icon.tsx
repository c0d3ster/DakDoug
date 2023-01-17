import { FC } from 'react'
import { Tooltip } from 'react-tooltip'

import 'react-tooltip/dist/react-tooltip.css'

interface Props {
  name: string
  url: string
  tip?: string
}

export const Icon: FC<Props> = ({ name, url, tip }) => {
  const tooltipInfo = tip || `View My ${name}`
  const imageSrc = `icons/${name.replace(' ', '')}.png`

  return (
    <div className='icon-container'>
      <a href={url} target='_blank'>
        <img src={imageSrc} id={name} />
      </a>
      <Tooltip anchorId={name} content={tooltipInfo} delayShow={500} place='bottom' />
    </div>
  )
}
