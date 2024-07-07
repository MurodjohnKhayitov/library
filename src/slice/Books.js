import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    Books: [],
    booksDetails: null,
    error: null
}
export const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        getBooksStart: state => {
            state.isLoading = true
        },
        getBooksSuccess: (state, action) => {
            state.isLoading = false
            state.Books = action.payload
        },
        getBooksFailure: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
        getBooksDetailStart: state => {
            state.isLoading = true
        },
        getBooksDetailSuccess: (state, action) => {
            state.isLoading = false
            state.booksDetails = action.payload
        },
        getBooksDetailFailure: (state, action) => {
            state.isLoading = false

        },

    }
})

export const { getBooksStart, getBooksSuccess, getBooksFailure, getBooksDetailStart, getBooksDetailSuccess, getBooksDetailFailure } = booksSlice.actions
export default booksSlice.reducer