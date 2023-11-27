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
      const response = await axios.get(`${pinataConfig.gatewayUrl}${cid}`)

      console.info(response)

      return { audioData: response.data }
    } catch (error) {
      console.log(error)
    }
  }

  return { pinFile, retrieveFile }
}