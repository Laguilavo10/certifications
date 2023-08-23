import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  certifications: [
    {
      name: String,
      fileName: String,
      image: String,
      aspectRatioImage: Number,
      date: Date,
      entity: String,
      isImportant: Boolean
    }
  ],
  entities: [{ type: String }]
})

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User
