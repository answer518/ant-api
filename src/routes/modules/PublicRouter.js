import Router from 'koa-router'
import publicService from '../../service/PublicService'
import contentService from '../../service/ContentService'
import userService from '../../service/UserService'

const router = new Router()
router.prefix('/public')

// 获取二维码
router.get('/getCaptcha', publicService.getCaptcha)

// 获取用热门帖子
router.get('/hotPost', publicService.getHotPost)

// 获取帖子列表
router.get('/getPostList', contentService.getPostList)

// 获取用户最近的发贴记录
router.get('/latestPost', contentService.getPostPublic)

// 获取帖子详情
router.get('/getPostDetail', contentService.getPostDetail)

// 获取用签到排行
router.get('/hotSignRecord', publicService.getHotSignRecord)

// 友情提醒
router.get('/getTips', contentService.getTips)

// 本周热议
router.get('/getTopWeek', contentService.getTopWeek)

// 获取用户基本信息
router.get('/info', userService.getBasicInfo)

export default router
