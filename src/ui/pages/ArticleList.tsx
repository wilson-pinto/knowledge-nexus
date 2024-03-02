import { useEffect, useState } from "react"
import ArticleRow from "../components/ArticleRow"
import AxiosHelper from "../../api/AxiosHelper"
import Article from "../../interfaces/Article"

const ArticleList = () => {

    const [articleList, setArticleList] = useState<Array<Article>>([])

    useEffect(()=>{
        AxiosHelper.httpGet({path: 'articles'})
        .then((res)=>{
            setArticleList(res as Array<Article>)
        }).catch(e=> console.log(e) )
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
