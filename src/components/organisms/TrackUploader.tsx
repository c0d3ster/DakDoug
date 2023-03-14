import { FC } from 'react'

import { Section } from 'components/molecules'
import { AudioExtensions, AudioMimeTypes, Link } from '@/types'
import { links } from '@/data/Links'
import { useWalletContext } from '@/hooks'

export const TrackUploader: FC = () => {
  const iconList: Link[] = [links.resume, links.linkedIn]
  const navList = ['Uploader', 'Considerations', 'Contact']
  const acceptedMedia = [...Object.values(AudioMimeTypes), ...Object.values(AudioExtensions)]

  const { walletAddress } = useWalletContext()

  const handleTrackUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      console.error('no file given')

      return
    }

    const files = [...Array.from(e.target.files)]

    console.log(files[0])
  }

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
        <input
          accept={acceptedMedia.join(',')}
          onChange={handleTrackUpload}
          multiple={false}
          type='file'
        />
        <p>{walletAddress}</p>
      </div>
    </Section>
  )
}