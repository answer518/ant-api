import send from '../config/MailConfig'
import moment from 'moment'
import jsonwebtoken from 'jsonwebtoken'
import config from '../config'
import { checkCode } from '../common/utils'
import User from '../model/User'
import bcrypt from 'bcrypt'

class LoginController {
  async forget (ctx) {
    const { body } = ctx.request
    try {
      const result = await send({
        code: '1234',
        expire: moment().add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
        email: body.username,
        user: 'Answer'
      })
      ctx.body = {
        code: 200,
        data: result,
        msg: '邮件发送成功'
      }
    } catch (error) {
      console.log(error)
    }
  }

  async login (ctx) {
    const { body } = ctx.request
    const result = await checkCode(body.sid, body.code)
    if (result) {
      const user = await User.findOne({ username: body.username })
      const isValidPass = await bcrypt.compare(body.password, user.password)
      if (isValidPass) {
        const userJSON = user.toJSON()
        const delFiles = ['username', 'password', 'roles']
        delFiles.forEach(key => {
          delete userJSON[key]
        })
        const token = jsonwebtoken.sign(
          {
            _id: 'Answer'
            // exp: Math.floor(Date.now() / 1000 + 60 * 60 * 24)
          },
          config.JWT_SECRET,
          {
            expiresIn: '1d' // 60 * 60
          }
        )
        ctx.body = {
          code: 200,
          data: { ...userJSON },
          token: token
        }
      } else {
        ctx.body = {
          code: 404,
          msg: '用户名或密码错误'
        }
      }
    } else {
      ctx.body = {
        code: 401,
        msg: '图片验证码不正确'
      }
    }
  }

  async reg (ctx) {
    const { body } = ctx.request
    const result = await checkCode(body.sid, body.code)
    const msg = {}
    let check = true
    if (result) {
      const user1 = await User.findOne({ username: body.username })
      if (user1) {
        msg.username = ['此邮箱已经注册，可以通过邮箱找回密码']
        check = false
      }
      const user2 = await User.findOne({ nickname: body.nickname })
      if (user2) {
        msg.nickname = ['此昵称已经使用，请更换新的昵称']
        check = false
      }

      if (check) {
        body.password = await bcrypt.hash(body.password, 5)
        const user = new User({
          username: body.username,
          nickname: body.nickname,
          password: body.password,
          created: moment().format('YYYY-MM-DD HH:mm:ss')
        })
        const result = await user.save()
        ctx.body = {
          code: 200,
          data: result,
          msg: '注册成功'
        }
        return
      }
    } else {
      msg.code = ['验证码已失效, 请重新获取']
    }

    ctx.body = {
      code: 500,
      msg: msg
    }
  }
}
export default new LoginController()
