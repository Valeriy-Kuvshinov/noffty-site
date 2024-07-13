const baseUrl = process.env.NODE_ENV !== 'production'
    ? 'http://localhost:3030/api/'
    : 'https://noffty.com/api/'

export const httpService = {
    get(endpoint: string, params?: Record<string, string | number | boolean>) {
        const queryString = params ? `?${createQueryString(params)}` : ''
        return request('GET', `${endpoint}${queryString}`)
    },
    post(endpoint: string, data?: any) {
        return request('POST', endpoint, data)
    },
    put(endpoint: string, data?: any) {
        return request('PUT', endpoint, data)
    },
    remove(endpoint: string, data?: any) {
        if (data) return request('DELETE', endpoint, data)
        return request('DELETE', endpoint)
    }
}

async function request(method: string, endpoint: string, data?: any) {
    const url = `${baseUrl}${endpoint}`
    const headers = {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
    }
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

function createQueryString(params: Record<string, string | number | boolean>): string {
    return Object.entries(params).map(([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
        .join('&')
}