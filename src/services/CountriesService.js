import axios from 'axios';
import {endpoints, enums} from '../enums';
export default {
    getAll() {
        return new Promise((resolve, reject) => {
            axios.get(`${enums.BASE_URL}${endpoints.ALL}`).then((response)=> {
                resolve(response)
            }).catch((err) => {
                reject(err)
            })
        }) 
    }
}