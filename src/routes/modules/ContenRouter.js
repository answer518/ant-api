import Router from 'koa-router'
import contentService from '../../service/ContentService'

const router = new Router()

router.prefix('/content')

// 上传图片
router.post('/upload', contentService.uploadImg)

// 发表新贴
router.post('/add', contentService.addPost)

// 更新帖子
router.post('/update', contentService.updatePost)

router.post('/updateId', contentService.updatePostByTid)

router.post('/updatePostSettings', contentService.updatePostBatch)

// 删除帖子
// router.post('/delete', contentService.deletePost)

export default router
