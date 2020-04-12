import mongoose from '../config/DBHelpler'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: { type: String },
  nickname: { type: String },
  password: { type: String },
  created: { type: Date }
})

const UserModel = mongoose.model('users', UserSchema)

export default UserModel
