//全局公共方法

//跳转
export function goUrl(url) {
    return window.location.href = url
}

//文字的省略号
export function sliceWord(content, limit = 20) {
    let str = content
    if(str.length > limit) {
        str = str.substring(0, limit) + '...'
    }
    return str
}

//时间戳转日期格式, 例 YYYY-MM-DD HH:mm:ss
export function formatDate(timestamp) {
    const date = new Date(timestamp)
    return date.toLocaleDateString().replace(/\//g, '-') + ' ' + date.toTimeString().substring(0, 8)
}

export function toFixed(v) {
    return parseFloat(v).toFixed(1)
}