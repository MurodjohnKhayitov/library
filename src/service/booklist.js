import { getItem, getItemKey } from "../helpers/persistenceStorage";
import axios from "./api"

const bookService = {

    // async getBook() {
    //     const { data } = await axios.get('/books', {
    //         headers: {
    //             'Key': getItemKey('key'),
    //             'Sign': '8db9fc2f6e780ce5f2baff94e51fd9e6'
    //         }

    //     });
    //     return data
    // },
    // async mySelf() {
    //     const { data } = await axios.get('/myself', {
    //         headers: {
    //             'Key': getItemKey('key'),
    //             'Sign': 'c10d14db69b8f80c5608389450df030d'
    //         }
    //     });
    //     return data
    // },

}
export default bookService 