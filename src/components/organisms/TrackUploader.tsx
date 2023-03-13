import { FC } from 'react'

import { Section } from 'components/molecules'
import { Link } from '@/types'
import { links } from '@/data/Links'
import { useWalletContext } from '@/hooks'

export const TrackUploader: FC = () => {
  const iconList: Link[] = [links.resume, links.linkedIn]
  const navList = ['Uploader', 'Considerations', 'Contact']
  
  const { walletAddress } = useWalletContext()

  return (
    <Section
      name='Uploader'
      background='./PurpleMilkyWay.jpg'
      title='The Prompt'
      navList={navList}
      iconList={iconList}
      hasWallet={true}
    >
      <div className='row'>
        <h2 className='col center'>Track Uploader</h2>
      </div>
      <div className='row'>
        <p className='col center'>{walletAddress}</p>
      </div>
    </Section>
  )
}