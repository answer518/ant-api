import svgCaptcha from 'svg-captcha'

class PublicController {
  constructor() {}
  async getCaptcha(ctx) {
    const newCaptca = svgCaptcha.create({
      size: 4, // 验证码长度
      ignoreChars: '0o1il', // 忽略易混淆的字符
      color: true, // 验证码带背景颜色
      noise: Math.floor(Math.random() * 5), // 干扰线
      width: 150,
      height: 50,
    })
    // console.log(newCaptca)
    ctx.body = {
      code: 200,
      data: newCaptca.data,
    }
  }
}

export default new PublicController()
