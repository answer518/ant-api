const DB_URL = 'mongodb://127.0.0.1:27017/test_db'
const REDIS = {
  host: '127.0.0.1',
  port: 6379, // redis默认密码
  password: '123456'
}
const JWT_SECRET =
  'a&*38QthAKuiRwISGLotgq^3%^$zvA3A6Hfr8MF$jM*HY4*dWcwAW&9NGp7*b53!'

export default {
  DB_URL,
  REDIS,
  JWT_SECRET
}
