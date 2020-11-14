import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:9000/soynet',
})

export const addActivity = payload => api.post(`/faceid/api/activity`, payload)
export const getAllActivities = () => api.get(`/faceid/api/activities`)
export const updateActivityById = (id, payload) => api.put(`/faceid/api/activity/${id}`, payload)
export const deleteActivityById = id => api.delete(`/faceid/api/activity/${id}`)
export const getActivityById = id => api.get(`/faceid/api/activity/${id}`)
export const getActivityByDeviceId = id => api.get(`/deviceid/api/activity/device/${id}`)

const apis = {
    addActivity,
    getAllActivities,
    updateActivityById,
    deleteActivityById,
    getActivityById,
    getActivityByDeviceId,
}

export default apis
