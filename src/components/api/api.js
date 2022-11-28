import axios from 'axios'


// const url = 'http://localhost:5000'
const url = 'https://laundary-cart-server.onrender.com'

export const getOrders = async () => {
    try {
        const token = (localStorage.getItem('AUTH_TOKEN')).toString()
        // console.log(token)
        const response = await axios({
            method: 'get',
            url: `${url}/order`,
            headers: { Authorization: token }
        })

        return response
    }
    catch (error) {
        return error
    }
}



export const login = async (phoneOrEmail, password) => {
    try {
        // console.log(phoneOrEmail, password)
        const response = axios.post(
            `${url}/login`,
            { phoneOrEmail, password }
        )
        return response
    }
    catch (error) {
        return error
    }
}
export const register = async (userInfo) => {
    try {
        // console.log(phoneOrEmail, password)
        const response = axios.post(
            `${url}/register`,
            { ...userInfo }
        )
        return response
    }
    catch (error) {
        return error
    }
}
export const createOrder = async (orderInfo) => {
    try {
        const token = (localStorage.getItem('AUTH_TOKEN')).toString()
        const response = await axios({
            method: 'post',
            url: `${url}/order`,
            headers: { Authorization: token },
            data: { ...orderInfo }
        })
        return response
    }
    catch (error) {
        return error
    }
}
export const deleteOrder = async (id) => {
    try {
        const token = (localStorage.getItem('AUTH_TOKEN')).toString()
        const response = await axios({
            method: 'delete',
            url: `${url}/order/${id}`,
            headers: { Authorization: token }
        })
        return response
    }
    catch (error) {
        return error
    }
}
