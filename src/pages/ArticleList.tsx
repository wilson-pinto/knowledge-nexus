import ArticleRow from "../components/ArticleRow"
import { articleList } from "../data/article-list"

const ArticleList = () => {

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
