import {
    post, del, get, put,
} from '@/utils/request.js';

// 分页查询
export function dockSearch(data) {
    return post('/dock/search', data);
}

// 删除单条
export function delDock(id) {
    return del(`/dock/${id}`);
}

// 查询单条
export function SingleDock(id) {
    return get(`/dock/${id}`);
}

// 修改单条
export function updataDock(data) {
    return put('/dock/', data);
}

export function exmpleService() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: 1 });
        }, 1000);
    });
}
