import { FC } from 'react'
import { Tooltip } from 'react-tooltip'

import { links } from '../data/Links'

interface Props {
  name: string
  tip?: string
}

const Icon: FC<Props> = ({ name, tip }) => {
  let tooltipInfo = tip || `View My ${name}`
  if (name == 'googleDrive') {
    tooltipInfo = `View My Google Drive Photos`
  }

  return (
    <div className='icon-container'>
      <a href={links[name]} target='_blank'>
        <img src={`icons/${name}.png`} data-tip={tooltipInfo} data-for={name} />
      </a>
      <Tooltip id={name} delayShow={500} place='bottom' />
    </div>
  )
}

export default Icon
