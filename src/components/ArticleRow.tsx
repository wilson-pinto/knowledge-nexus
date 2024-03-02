import { articleSeq, toSlug } from "../utils/string-utils"
import { useNavigate } from "react-router-dom";

const ArticleRow = ({ article, seqNum }: any) => {

    const navigate = useNavigate();

    const onRowClick = () => {
        navigate(`/article/${article.id}/${toSlug(article.title)}`)
    }

    return (
        article && <div className="border-bottom border-light py-4 pointer" onClick={onRowClick}>
            <p className="fs-4 text-dark mb-1 fw-medium" >{articleSeq(seqNum)}</p>
            <p className="display-5 text-dark mb-2">{article.title}</p>
            <p className="lead mb-0">{article.summary}</p>
        </div>
    )
}

export default ArticleRow



