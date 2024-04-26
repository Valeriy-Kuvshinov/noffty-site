export class HttpService {
    async request(method: string, endpoint: string, data?: any) {
        const url = `${endpoint}`
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

    get(endpoint: string, params?: any) {
        const queryString = params ?
            `?${new URLSearchParams(params).toString()}` : ''
        return this.request('GET', `${endpoint}${queryString}`)
    }

    post(endpoint: string, data?: any) {
        return this.request('POST', endpoint, data)
    }

    put(endpoint: string, data?: any) {
        return this.request('PUT', endpoint, data)
    }

    delete(endpoint: string, data?: any) {
        if (data) return this.request('DELETE', endpoint, data)
        else return this.request('DELETE', endpoint)
    }
}