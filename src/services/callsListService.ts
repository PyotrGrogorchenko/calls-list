import axios from 'axios'

const token = 'testtoken'

export const getCallsList = () => {
    return axios({
        method: 'post',
        url: 'https://api.skilla.ru/mango/getList',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}
