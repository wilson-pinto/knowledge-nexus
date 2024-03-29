import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosHelper from "../../api/AxiosHelper";
import Article from "../../interfaces/Article";

export const getArticleDetailThunk = createAsyncThunk(
    '/artcles/detail',
    async (id: string, thunkApi) => {
        return await AxiosHelper.httpGet({ path: `articles/${id} ` })
    }
)

type ArticleDetailSliceType = {
    data: Article | null
    isLoading: boolean
    errorMessage: string
}

const initialState: ArticleDetailSliceType = {
    data: null,
    isLoading: true,
    errorMessage: ''
}

const articlesDetailSlice = createSlice({
    name: "articlesDetailSlice",
    initialState: initialState,
    reducers: {
        resetArticleDetails: (state) => {
            return {
                ...initialState
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getArticleDetailThunk.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getArticleDetailThunk.fulfilled, (state, action) => {
                return {
                    ...initialState,
                    isLoading: false,
                    data: action.payload as Article
                }
            })
            .addCase(getArticleDetailThunk.rejected, (state, action) => {
                return {
                    ...initialState,
                    errorMessage: action.error.message ?? "Something went wrong",
                    isLoading: false,
                }
            })
    }
})

export const { resetArticleDetails } = articlesDetailSlice.actions

export default articlesDetailSlice.reducer