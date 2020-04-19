import Router from 'koa-router'
import publicService from '../../service/PublicService'
import contentService from '../../service/ContentService'
import userService from '../../service/UserService'
import commentsService from '../../service/CommentsService'

const router = new Router()
router.prefix('/public')

// 获取二维码
router.get('/getCaptcha', publicService.getCaptcha)

// 获取用热门帖子
router.get('/hotPost', publicService.getHotPost)

// 获取用热门评论
router.get('/hotComments', publicService.getHotComments)

// 获取用签到排行
router.get('/hotSignRecord', publicService.getHotSignRecord)

// 获取文章列表
router.get('/getPostList', contentService.getPostList)

// 获取友情链接
router.get('/getLinks', contentService.getLinks)

// 友情提醒
router.get('/getTips', contentService.getTips)

// 本周热议
router.get('/getTopWeek', contentService.getTopWeek)

// 获取用户最近的发贴记录
router.get('/latestPost', contentService.getPostPublic)

// 获取文章详情
router.get('/content/detail', contentService.getPostDetail)

// 获取用户信息
router.get('/info', userService.getBasicInfo)

// 获取用户基本信息
router.get('/info', userService.getBasicInfo)

// 获取评论列表
router.get('/comments', commentsService.getComments)

// 获取用户最近的评论记录
router.get('/latestComment', commentsService.getCommentPublic)

export default router
