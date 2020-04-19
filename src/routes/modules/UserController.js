import Router from 'koa-router'
import userService from '../../service/UserService'
// import contentService from '../../service/ContentService'

const router = new Router()

router.prefix('/user')

// 用户签到
router.get('/fav', userService.userSign)

// 更新用户的基本信息
router.post('/basic', userService.updateUserInfo)

// 修改密码
router.post('/changePassword', userService.changePasswd)

// 取消 设置收藏
router.get('/setCollect', userService.setCollect)

// 获取收藏列表
router.get('/collect', userService.getCollectByUid)

// 获取用户发贴记录
// router.get('/post', contentService.getPostByUid)

// 删除发贴记录
// router.get('/deletePost', contentService.deletePostByUid)

// 获取历史消息
router.get('/getmsg', userService.getMsg)

// 获取历史消息
router.get('/setmsg', userService.setMsg)

// 保存错误日志
// router.post('/addError', errorController.addError)

export default router
