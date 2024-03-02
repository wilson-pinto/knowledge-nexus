import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosHelper from "../api/AxiosHelper";
import Article from "../interfaces/Article";

export const getArticlesThunk = createAsyncThunk(
    '/articles',
    async (_, thunkApi) => {
        return await AxiosHelper
        .httpGet({ path: 'articles' }) 
    }
)

type ArticlesSliceType = {
    data: Array<Article>
    isLoading: boolean
    errorMessage: string
}

const initialState: ArticlesSliceType = {
    data: [],
    isLoading: true,
    errorMessage: ''
}

const articlesSlice = createSlice({
    name: "articlesSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getArticlesThunk.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getArticlesThunk.fulfilled, (state, action) => {
                return {
                    ...initialState,
                    isLoading: false,
                    errorMessage: '',
                    data: action.payload as Article[] ?? []
                }
            })
            .addCase(getArticlesThunk.rejected, (state, action) => {
                return {
                    ...state,
                    errorMessage: action.error.message ?? "Something went wrong",
                    isLoading: false,
                }
            })
    }
})

export default articlesSlice.reducer