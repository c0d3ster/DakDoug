import { FC, useState } from 'react'
import { BN, web3, utils } from '@coral-xyz/anchor'
import { toast } from 'react-toastify'

import { Section, TrackInput } from 'components/molecules'
import { Link } from '@/types'
import { links } from '@/data/Links'
import { usePinata, useWalletContext } from '@/hooks'

export const TrackUploader: FC = () => {
  const iconList: Link[] = [links.resume, links.linkedIn]
  const navList = ['Uploader', 'Explorer', 'Considerations', 'Contact']

  const [track, setTrack] = useState<File | null>(null)

  const { pinFile } = usePinata()

  const { anchorProvider, getProgram } = useWalletContext()

  const handleUpload = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()

    if (!track) {
      toast.error('no track selected')
      return
    }

    const response = await pinFile(track)

    if (!response) {
      toast.error('error uploading file')
      return
    } 

    const program = await getProgram()

    const [counterPDA] = web3.PublicKey.findProgramAddressSync([
      utils.bytes.utf8.encode('counter')
    ], program.programId)

    const { idCounter } = await program.account.trackCounter.fetch(counterPDA)

    const [trackAccountPDA] = web3.PublicKey.findProgramAddressSync([
      utils.bytes.utf8.encode('track'),
      new BN(idCounter).toArrayLike(Buffer, 'le', 8),
    ], program.programId)

    try {
      await program.methods.addTrack(response.data.IpfsHash).accounts({
        track: trackAccountPDA,
        trackCounter: counterPDA,
        user: anchorProvider.wallet.publicKey,
      }).rpc()

      setTrack(null)
      toast.success(`Uploaded track #${idCounter} successfully`)
    } catch (e: any) {
      toast.error(e.message)
      return
    }
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
        <TrackInput track={track} setTrack={setTrack} handleUpload={handleUpload} />
      </div>
      <div className='row'>
        <h2 className='col center'>Previous Uploads</h2>
      </div>
    </Section>
  )
}
