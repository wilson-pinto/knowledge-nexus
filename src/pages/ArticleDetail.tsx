import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Article from '../interfaces/Article';
import AxiosHelper from '../api/AxiosHelper';

const ArticleDetail = () => {

    // Capture params from route
    let { id, slug } = useParams();
    const navigate = useNavigate();

    const [article, setArticleDetail] = useState<Article>()

    useEffect(() => {
        if (!id || !slug) {
            navigate('/not-found')
        }

        AxiosHelper.httpGet({ path: `articles/${id} ` })
            .then(res => {
                setArticleDetail(res as Article)
            }).catch(e => console.error(e))
    }, [])

    return (
        <div className='container py-5'>
            {article && <>
                <p className="display-5 text-dark mb-3">
                    {article.title}
                </p>
                <p className="lead mb-3">
                    {article.summary}
                </p>
                <p className='lead text-dark'>
                    {article.fullText}
                </p>
            </>}
        </div>
    )
}

export default ArticleDetail
