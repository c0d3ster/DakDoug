import axios from 'axios'

import { pinataConfig } from '@/settings'

export const usePinata = () => {
  const pinFile = async (file: File) => {
    const formData = new FormData()
    
    formData.append('file', file)

    const metadata = JSON.stringify({
      name: file.name,
    })
    formData.append('pinataMetadata', metadata)
    
    const options = JSON.stringify({
      cidVersion: 0,
    })
    formData.append('pinataOptions', options)

    try {
      return await axios.post(pinataConfig.pinUrl, formData, {
        headers: {
          'Content-Type': `multipart/form-data; boundary=${(formData as any)._boundary}`,
          Authorization: pinataConfig.jwt
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  const retrieveFile = async (cid: string) => {
    try { 
      const config = {
        method: 'get',
        url: `${pinataConfig.gatewayUrl}${cid}`,
        headers: { 
          'Authorization': pinataConfig.jwt,
          'Access-Control-Allow-Origin': '*',
        }
      }
      return await axios(config)
    } catch (error) {
      console.log(error)
    }
  }

  return { pinFile, retrieveFile }
}