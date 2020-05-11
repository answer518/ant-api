import mongoose from '../config/DBHelpler'
const Schema = mongoose.Schema

const PostSchema = new Schema({
  uid: { type: String, ref: 'users' },
  title: { type: String },
  content: { type: String },
  created: { type: Date }, // 发布时间
  catalog: { type: String }, // 需求类型：转入，求购 代办
  qualification: { type: String }, // 资质类型
  price: { type: String }, // 价格
  // fav: { type: String },
  isEnd: { type: String, default: '0' },
  reads: { type: Number, default: 0 }, // 已读
  answer: { type: Number, default: 0 }, // 回复
  status: { type: String, default: '0' },
  isTop: { type: String, default: '0' }, // 置顶
  sort: { type: String, default: 100 } // 排序
})

PostSchema.pre('save', function (next) {
  this.created = new Date()
  next()
})

PostSchema.statics = {
  /**
   * 获取文章列表数据
   * @param {Object} options 筛选条件
   * @param {String} sort 排序方式
   * @param {Number} page 分页页数
   * @param {Number} limit 分页条数
   */
  getList: function (options, sort, page, limit) {
    return this.find(options)
      .sort({ [sort]: -1 })
      .skip(page * limit)
      .limit(limit)
      .populate({
        path: 'uid',
        select: 'name position location pic'
      })
  },
  countList: function (options) {
    return this.find(options).countDocuments()
  },
  findByTid: function (id) {
    return this.findOne({ _id: id }).populate({
      path: 'uid',
      select: '_id name pic position location'
    })
  },
  getListByUid: function (id, page, limit) {
    return this.find({ uid: id })
      .skip(page * limit)
      .limit(limit)
      .sort({ created: -1 })
  },
  countByUid: function (id) {
    return this.find({ uid: id }).countDocuments()
  }
}

const PostModel = mongoose.model('posts', PostSchema)

export default PostModel
