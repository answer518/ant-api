import Router from 'koa-router'
import LoginController from '../api/LoginController'

const router = new Router()
router.prefix('/login')
router.post('/forget', LoginController.forget)
router.post('/login', LoginController.login)

export default router
