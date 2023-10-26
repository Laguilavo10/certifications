// import mongoose from 'mongoose'

// const connection: any = {}

// const uri =
//   'mongodb+srv://andres_laguilavo:Makita23@certifications.nbieyel.mongodb.net/?retryWrites=true&w=majority'

// export async function connectDB() {
//   if (connection.isConnected === 1) {
//     console.log('already connected')
//     return
//   }
//   if (mongoose.connections.length > 0) {
//     connection.isConnected = mongoose.connections[0].readyState
//     if (connection.isConnected === 1) {
//       console.log('use previous connection')
//       return
//     }
//     await mongoose.disconnect()
//   }

//   const db = await mongoose.connect(uri)

//   connection.isConnected = db.connections[0].readyState
// }

// export async function disconnectDB() {
//   console.log('connection', connection)

//   if (connection.isConnected === 1) {
//     await mongoose.disconnect()
//     connection.isConnected = false
//   } else {
//     console.log('not disconnected')
//   }
// }

import mongoose from 'mongoose'

// const uri =
//   'mongodb+srv://andres_laguilavo:Makita23@certifications.nbieyel.mongodb.net/?retryWrites=true&w=majority'
const uri = process.env.NEXT_PUBLIC_MONGO_URI ?? ''

const connection = mongoose.connection

export async function connectDB() {
  try {
    if (connection.readyState === 1) {
      console.log('Already connected to the database.')
      return
    }

    await mongoose.connect(uri)

    console.log('Connected to the database.')
  } catch (error) {
    console.error('Error connecting to the database:', error)
  }
}

export async function disconnectDB() {
  try {
    if (connection.readyState !== 0) {
      await mongoose.disconnect()
      console.log('Disconnected from the database.')
    } else {
      console.log('Not disconnected; no active connection.')
    }
  } catch (error) {
    console.error('Error disconnecting from the database:', error)
  }
}
