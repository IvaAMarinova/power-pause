import apiClient from './Client'

const getAll = async () => {
    try {
        const response = await apiClient.get('/users/id/2')
        console.log(response.data)
        return JSON.stringify(response.data)
    } catch (error) {
        return []
    }
}

export default {
    getAll
}