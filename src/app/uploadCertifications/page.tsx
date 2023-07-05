'use client'
// import CloudinaryUploadWidget from "../components/CloudinaryUploadWidget";
const url = 'https://api.cloudinary.com/v1_1/dyqdtw07b/image/upload'
const API_KEY = process.env.NEXT_PUBLIC_API_KEY ?? ''
// const SECRET_KEY = process.env.NEXT_PUBLIC_API_SECRET ?? ''
export default function Page() {
  const uploadImages = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { target } = e
    // console.log((target[0] as HTMLInputElement).files)
    const files = (target[0] as HTMLInputElement).files
    if (files?.length === 0) return
    for (let i = 0; i < files.length; i++) {
      const file = files[i]

      const fileName = file.name.split('.')[0]
      const folder = 'Platzi'
      const data = await fetch('/api/create-signature', {
        method: 'POST',
        body: JSON.stringify({ fileName, folder })
      })
      const { signature, timestamp } = await data.json()

      const formData = new FormData()
      formData.append('file', file)
      formData.append('api_key', `${API_KEY}`)
      formData.append('timestamp', `${timestamp}`)
      formData.append('signature', signature)
      formData.append('folder', `Certifications/${folder}`)
      formData.append('public_id', fileName)
      formData.append('format', 'jpg')

      try {
        const response = await fetch(url, {
          method: 'POST',
          body: formData
        });
        
        const responseData = await response.json();
        console.log(responseData);
        console.log(`${i + 1} de ${files.length}`);
      } catch (err) {
        console.log('err', err);
      }

    }
  }
  return (
    <div>
      <form onSubmit={(e) => uploadImages(e)}>
        <input type='file' multiple accept='image/*,.pdf' />
        <button className='border border-red-700 p-5'>Enviar</button>
      </form>
    </div>
  )
}
