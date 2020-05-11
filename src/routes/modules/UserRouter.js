import Router from 'koa-router'
import userService from '../../service/UserService'
import contentService from '../../service/ContentService'

const router = new Router()

router.prefix('/user')

// 用户签到
router.get('/fav', userService.userSign)

// 更新用户的基本信息
router.post('/basic', userService.updateUserInfo)

// 用户头像上传
router.post('/uploadPic', contentService.uploadImg)

// 修改密码
router.post('/changePassword', userService.changePasswd)

// 取消 设置收藏
router.get('/setCollect', userService.setCollect)

// 获取收藏列表
router.get('/collect', userService.getCollectByUid)

// 获取用户发贴记录
router.get('/post', contentService.getPostByUid)

// 删除发贴记录
router.get('/deletePost', contentService.deletePostByUid)

// 发起聊天
router.post('/chatWith', userService.chatWith)

// 聊天用户列表
router.get('/getChatWithUser', userService.getChatWithUser)

// 保存错误日志
// router.post('/addError', errorController.addError)

export default router
