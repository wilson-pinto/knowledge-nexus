import ArticleRow from "../components/ArticleRow"
import { AppDispatch, RootState } from "../../redux/store"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getArticlesThunk } from "../../redux/slice/articlesSlice"
import ErrorComponent from "../components/ErrorComponent"
import Shimmer from "../components/Shimmer"

const ArticleList = () => {

    const dispatch: AppDispatch = useDispatch()

    const { isLoading, data: articleList, errorMessage } = useSelector((state: RootState) => state.articles)

    useEffect(() => {
        dispatch(getArticlesThunk())
    }, [])

    return (
        <>
            <div className="container py-4">
                {
                    isLoading
                    && [...Array(10)]
                        .map((_, index) => (
                            <div className="py-4" key={index}>
                                <Shimmer className="mb-1" width="40px" />
                                <Shimmer className="mb-1" width="100%" />
                                <Shimmer className="mb-1" width="100%" />
                            </div>
                        ))
                }
                {
                    (articleList.length > 0) && articleList.map((article: any, index: number) => <ArticleRow key={index} seqNum={index + 1} article={article} />)
                }
                {
                    (!isLoading && !articleList.length && !errorMessage) && (<ErrorComponent> No articles to display</ErrorComponent>)
                }
                {
                    errorMessage && <ErrorComponent>{errorMessage}</ErrorComponent>
                }

            </div>

        </>
    )
}

export default ArticleList
