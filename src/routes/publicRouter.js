import Router from 'koa-router'
import publicController from '../api/PublicController'
import contentController from '../api/ContentController'

const router = new Router()
router.prefix('/public')

// 获取二维码
router.get('/getCaptcha', publicController.getCaptcha)

// 获取文章列表
router.get('/getPostList', contentController.getPostList)

// 获取友情链接
router.get('/getLinks', contentController.getLinks)

// 友情提醒
router.get('/getTips', contentController.getTips)

// 本周热议
router.get('/getTopWeek', contentController.getTopWeek)

export default router
