export const formatFileSize = (bytes: number, decimals = 2): string => {
  const sizes: string[] = ['Bytes', 'KB', 'MB', 'GB', 'TB']

  if (bytes === 0) {
    return 'N/A'
  }

  const i: number = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)).toString(), 16)

  return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(decimals < 0 ? 0 : decimals))} ${sizes[i]}`
}