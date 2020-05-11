import moogoose from '../config/DBHelpler'

const Schema = moogoose.Schema

const UserChatSchema = new Schema({
  from_id: { type: String, ref: 'users' },
  to_id: { type: String, ref: 'users' },
  chat_id: { type: String, ref: 'chats' },
  created: { type: Date, default: Date.now }
})

UserChatSchema.statics = {
  getUserChat: function (options) {
    return this.find(options)
      // .sort({ [sort]: -1 })
      // .skip(page * limit)
      // .limit(limit)
      .populate({
        path: 'from_id',
        select: 'name position location pic'
      })
  }
}

const UserChat = moogoose.model('user_chat', UserChatSchema)
export default UserChat
