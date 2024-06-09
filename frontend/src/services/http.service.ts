const baseUrl = process.env.NODE_ENV === 'production'
    ? '/api/'
    : '//localhost:3030/api/'

export const HttpService = {
    request,
    get,
    post,
    put,
    remove
}

async function request(method: string, endpoint: string, data?: any) {
    const url = `${baseUrl}${endpoint}`
    const headers = { 'Content-Type': 'application/json' }

    const config: RequestInit = { method: method, headers: headers }

    if (method !== 'GET' && data) config.body = JSON.stringify(data)

    try {
        const response = await fetch(url, config)
        const jsonData = await response.json()

        if (!response.ok) throw new Error(jsonData.message ||
            'An unknown error occurred')
        return jsonData
    } catch (error) {
        console.error('HTTP Service Error: ', error)
        throw error
    }
}

function get(endpoint: string, params?: any) {
    const queryString = params ?
        `?${new URLSearchParams(params).toString()}` : ''
    return request('GET', `${endpoint}${queryString}`)
}

function post(endpoint: string, data?: any) {
    return request('POST', endpoint, data)
}

function put(endpoint: string, data?: any) {
    return request('PUT', endpoint, data)
}

function remove(endpoint: string, data?: any) {
    if (data) return request('DELETE', endpoint, data)
    return request('DELETE', endpoint)
}