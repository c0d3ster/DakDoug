import axios from 'axios'
import { FC } from 'react'
import { web3, utils } from '@coral-xyz/anchor'

import { Section, Wallet } from 'components/molecules'
import { useWalletContext } from '@/hooks'
import { pinataConfig } from '@/settings'

export const AdminTemplate: FC = () => {
  const { getProgram, anchorProvider } = useWalletContext()

  const createTrackAccount = async () => {
    try {
      const program = await getProgram()

      const [counterPDA] = web3.PublicKey.findProgramAddressSync([
        utils.bytes.utf8.encode('counter')
      ], program.programId)

      await program.methods.initialize().accounts({
        admin: anchorProvider.wallet.publicKey,
        trackCounter: counterPDA
      }).rpc()

    } catch (error) {
      console.log("Error initializing program:", error);
    }
  }

const testPinata = async () => {
  const config = {
    method: 'get',
    url: 'https://api.pinata.cloud/data/testAuthentication',
    headers: { 
      'Authorization': pinataConfig.jwt,
    }
  };
  
  const res = await axios(config)
  
  console.log(res.data);
}

  return(
    <Section
      name='I am de captain'
      title='Admin Page'
      navList={[]}
      iconList={[]}
      background='DakDougLogo.png'
    >
      <Wallet />
      <div className='row'>
        <button onClick={createTrackAccount}>initialize track account</button>
        <button onClick={testPinata}>test pinata</button>
      </div>
    </Section>
  )
}