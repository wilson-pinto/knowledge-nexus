import ArticleRow from "../components/ArticleRow"
import { AppDispatch, RootState } from "../../redux/store"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getArticlesThunk } from "../../redux/articlesSlice"

const ArticleList = () => {

    const dispatch: AppDispatch = useDispatch()

    const { isLoading, data: articleList, errorMessage } = useSelector((state: RootState) => state.articles)

    useEffect(()=>{
        dispatch(getArticlesThunk())
    }, [])


    return (
        <>
            <div className="container py-4">
                {
                    articleList.map((article: any, index: number) => <ArticleRow key={index} seqNum={index + 1} article={article} />)
                }
            </div>

        </>
    )
}

export default ArticleList
