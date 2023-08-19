import mongoose from 'mongoose'

const connection: any = {}

const uri =
  'mongodb+srv://andres_laguilavo:Makita23@certifications.nbieyel.mongodb.net/?retryWrites=true&w=majority'

export async function connectDB () {
  if (connection.isConnected) {
    console.log('already connected')
    return
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState
    if (connection.isConnected === 1) {
      console.log('use previous connection')
      return
    }
    await mongoose.disconnect()
  }
  mongoose.connection.on('open', () => {
    console.log('conectado')
  })

  mongoose.connection.on('error', (err) => {
    console.log('error', err)
  })

  const db = await mongoose.connect(uri)

  connection.isConnected = db.connections[0].readyState
}
