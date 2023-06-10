import axios from 'axios'

import { pinataJWT } from '@/settings'

export const usePinata = () => {
  const pinFile = async (file: File) => {
    const formData = new FormData();
    
    formData.append('file', file)

    const metadata = JSON.stringify({
      name: file.name,
    });
    formData.append('pinataMetadata', metadata);
    
    const options = JSON.stringify({
      cidVersion: 0,
    })
    formData.append('pinataOptions', options);

    try{
      return await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        headers: {
          'Content-Type': `multipart/form-data; boundary=${(formData as any)._boundary}`,
          Authorization: pinataJWT
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  return { pinFile }
}