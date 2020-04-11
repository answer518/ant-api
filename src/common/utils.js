import { getValue } from '../config/RedisConfig'

export const checkCode = async (key, value) => {
    console.log(key, value)
    const redisData = await getValue(key)
    console.log('redisData', redisData)
    if (redisData !== null) {
        if (redisData.toLowerCase() === value.toLowerCase()) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}