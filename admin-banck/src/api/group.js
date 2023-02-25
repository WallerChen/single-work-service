import request from '@/utils/request'

// 代理域名配置
const path = 'single';

export function getList(params) {
  return request({
    url: `${path}/admin/users/index`,
    method: 'get',
    params
  })
}

export function getListByNickname(params) {
    return request({
        url: `${path}/admin/users/fuzzySearch`,
        method: 'get',
        params
    })
}

export function updateUserInfo(id ,params) {
    return request({
        url: `${path}/admin/users/resultful/${id}`,
        method: 'put',
        data: params
    })
}
  
