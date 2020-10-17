import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:9000/soynet/faceid/api',
})

export const addActivity = payload => api.post(`/activity`, payload)
export const getAllActivities = () => api.get(`/activities`)
export const updateActivityById = (id, payload) => api.put(`/activity/${id}`, payload)
export const deleteActivityById = id => api.delete(`/activity/${id}`)
export const getActivityById = id => api.get(`/activity/${id}`)

const apis = {
    addActivity,
    getAllActivities,
    updateActivityById,
    deleteActivityById,
    getActivityById,
}

export default apis
