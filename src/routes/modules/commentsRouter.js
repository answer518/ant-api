import Router from 'koa-router'
import commentsService from '../../service/CommentsService'

const router = new Router()

router.prefix('/comments')

// 添加评论
router.post('/reply', commentsService.addComment)

// 更新评论
router.post('/update', commentsService.updateComment)

// 设置最佳答案
router.get('/accept', commentsService.setBest)

// 评论点赞
router.get('/hands', commentsService.setHands)

export default router
