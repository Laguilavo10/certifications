export function removeExtensionFile(fileName: string) {
  const lastDot = fileName.lastIndexOf('.')
  if (lastDot === -1) {
    return fileName // No extension found
  }
  return fileName.slice(0, lastDot)
}
