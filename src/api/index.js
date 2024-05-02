//这里统一管理所有接口
import request from '../utils/request'

//获取天气信息
export const getWeatherInfo = (params, headers) => {
    return request.get('/v1/weather', params, { headers })
}

//获取系统信息
export const getHardwareInfo = (params, headers) => {
    return request.get('/v1/hardware', params, { headers })
}
