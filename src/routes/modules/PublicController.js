import Router from 'koa-router'
import publicService from '../../service/PublicService'
import contentService from '../../service/ContentService'

const router = new Router()
router.prefix('/public')

// 获取二维码
router.get('/getCaptcha', publicService.getCaptcha)

// 获取文章列表
router.get('/getPostList', contentService.getPostList)

// 获取友情链接
router.get('/getLinks', contentService.getLinks)

// 友情提醒
router.get('/getTips', contentService.getTips)

// 本周热议
router.get('/getTopWeek', contentService.getTopWeek)

export default router
