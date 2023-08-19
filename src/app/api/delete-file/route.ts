import { cloudinary } from '@/app/services/configCloudinary'
import { NextResponse } from 'next/server'

export async function POST (req: Request) {
  try {
    const { publicId } = await req.json()
    if (!publicId) {
      return NextResponse.json(
        { success: false, error: 'Se requiere un publicId válido' },
        { status: 400 }
      )
    }

    await cloudinary.api.delete_resources(publicId)

    return NextResponse.json({
      success: true,
      message: `Archivo : ${publicId} eliminado correctamente`
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { success: false, error: 'Hubo un error al eliminar el archivo' },
      { status: 500 }
    )
  }
}
