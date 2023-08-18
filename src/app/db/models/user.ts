import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique:true },
  certifications: [
    {
      name: String,
      fileName: String,
      date: Date,
      entity: String,
      isImportant: Boolean
    }
  ]
})

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User
