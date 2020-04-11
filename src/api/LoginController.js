import send from "../config/MailConfig";
import moment from 'moment'
import jsonwebtoken from 'jsonwebtoken'
import config from '../config'
import { checkCode } from '../common/utils'
import User from '../model/User'

class LoginController {
  constructor() {}

  async forget(ctx) {
    const { body } = ctx.request;
    try {
      let result = await send({
        code: "1234",
        expire: moment().add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
        email: body.username,
        user: "Answer",
      });
      ctx.body = {
          code: 200,
          data: result,
          msg: '邮件发送成功'
      }
    } catch (error) {
        console.log(error)
    }
  }

  async login(ctx) {
    const { body } = ctx.request
    const result = await checkCode(body.sid, body.code)
    if (result) {
      let user = await User.findOne({username: body.username})
      if (user.password === body.password) {
        const token = jsonwebtoken.sign({
          _id: "Answer",
          // exp: Math.floor(Date.now() / 1000 + 60 * 60 * 24)
        }, config.JWT_SECRET, {
          expiresIn: '1d' // 60 * 60 
        })
        ctx.body = {
          code: 200,
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
}
export default new LoginController();
