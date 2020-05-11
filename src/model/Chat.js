import mongoose from '../config/DBHelpler'
const Schema = mongoose.Schema

const ChatSchema = new Schema({
  // 发送方
  from_uid: { type: String, ref: 'users' },
  // 接收方
  to_uid: { type: String, ref: 'users' },
  // 消息内容
  content: { type: String },
  // 发送时间
  created: { type: Date, default: Date.now },
  // 是否已读
  is_read: { type: Number, default: 0 }
})

ChatSchema.pre('save', function (next) {
  this.created = Date.now()
  next()
})

ChatSchema.statics = {

}

const ChatModel = mongoose.model('chats', ChatSchema)
export default ChatModel
