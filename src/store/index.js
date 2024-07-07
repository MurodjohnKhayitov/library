import { configureStore } from "@reduxjs/toolkit"
import authReducer from '../slice/Auth'
import bookList from '../slice/Books'
export default configureStore({
    reducer: {
        auth: authReducer,
        bookList: bookList
    }
})