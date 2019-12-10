// 公共方法
export function deepCopy(value) {
    return JSON.parse(JSON.stringify(value));
}
