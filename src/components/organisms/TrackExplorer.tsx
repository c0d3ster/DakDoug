import { FC, useState } from 'react'
import { BN, web3, utils } from '@coral-xyz/anchor'
import { toast } from 'react-toastify'

import { Section, TrackInput } from 'components/molecules'
import { Link } from '@/types'
import { links } from '@/data/Links'
import { usePinata, useWalletContext } from '@/hooks'

export const TrackExplorer: FC = () => {
  const iconList: Link[] = [links.resume, links.linkedIn]
  const navList = ['Explorer', 'Considerations', 'Contact']

  const [value, setValue] = useState<string>('')
  const [track, setTrack] = useState<any>(null)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const { getProgram } = useWalletContext()
  const { retrieveFile } = usePinata()

  const findTrackById = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()

    const program = await getProgram()

    const [trackPDA] = web3.PublicKey.findProgramAddressSync([
      utils.bytes.utf8.encode('track'),
      new BN(value).toArrayLike(Buffer, 'le', 8)
    ], program.programId)

    const trackData = await program.account.track.fetch(trackPDA)

    const audioData = await retrieveFile(trackData.cid)

    if (audioData) {
      setTrack(audioData)
      toast.success(`Track #${trackData.id} successfully retrieved`)
    }
  }

  return (
    <Section
      name='Explorer'
      background='./PurpleMilkyWay.jpg'
      title='The Prompt'
      navList={navList}
      iconList={iconList}
      hasWallet={true}
    >
      <div className='row'>
        <h2 className='col center'>Track Explorer</h2>
      </div>
      <div className='row'>
        <p>Track id: </p><input value={value} onChange={onChange}/><button onClick={findTrackById}>Find Track</button>
      </div>
      {track && <div>
        <video controls>
          <source src={track.audioData} />
        </video>
      </div>}
      <div className='row'>
        <h2 className='col center'>Recent Uploads</h2>
      </div>
    </Section>
  )
}