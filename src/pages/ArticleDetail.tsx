import { useParams } from 'react-router-dom';

const ArticleDetail = () => {
   
    // Capture params from route
    let { id, slug } = useParams();

    return (
        <div>
            Article detail works  {slug}/{id}
        </div>
    )
}

export default ArticleDetail
