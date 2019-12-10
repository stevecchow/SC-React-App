/* eslint-disable no-continue */
export function deepCopy(value) {
    return JSON.parse(JSON.stringify(value));
}

export function getUrlQuery(href, name) {
    // 如果链接没有参数，或者链接中不存在我们要获取的参数，直接返回空
    if (href.indexOf('?') === -1 || href.indexOf(`${name}=`) === -1) {
        return '';
    }
    // 获取链接中参数部分
    const queryString = href.substring(href.indexOf('?') + 1);
    // 分离参数对 ?key=value&key2=value2
    const parameters = queryString.split('&');
    let pos,
        paraName,
        paraValue;
    for (let i = 0; i < parameters.length; i++) {
    // 获取等号位置
        pos = parameters[i].indexOf('=');
        if (pos === -1) {
            continue;
        }
        // 获取name 和 value
        paraName = parameters[i].substring(0, pos);
        paraValue = parameters[i].substring(pos + 1);

        if (paraName === name) {
            return unescape(paraValue.replace(/\+/g, ' '));
        }
    }
    return '';
}

/**
 * tabel序号
 * @param {Number} index 当前行 索引
 * @param {Number} current
 * @param {Number} pageSize
 * return Number
 */
export function serialNumber(index, current, pageSize) {
    return (current - 1) * pageSize + index + 1;
}
