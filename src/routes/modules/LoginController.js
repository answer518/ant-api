import Router from 'koa-router'
import loginService from '../../service/LoginService'

const router = new Router()
router.prefix('/login')
router.post('/forget', loginService.forget)
router.post('/login', loginService.login)
router.post('/reg', loginService.reg)

export default router
