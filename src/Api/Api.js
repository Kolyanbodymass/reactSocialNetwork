import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "da5df115-2b84-47f0-b70d-e4f27c164b10"
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
}

export const headerAPI = {
    getHeaderAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            });
    },
    getHeaderPhoto(id) {
        return instance.get(`profile/${id}`)
            .then(response => {
                return response.data
            });
    }
}