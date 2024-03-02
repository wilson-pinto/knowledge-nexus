import { useParams } from 'react-router-dom';
import { articleSeq } from '../utils/string-utils';

const ArticleDetail = () => {

    // Capture params from route
    let { id, slug } = useParams();

    return (
        <div className='container py-5'>
            <p className="display-5 text-dark mb-3">
                The Impact of Artificial Intelligence on Society: Opportunities and Challenges
            </p>
            <p className="lead mb-4">
                Examine the transformative effects of artificial intelligence on various aspects of society and discuss ethical considerations.
            </p>
            <p className='lead text-dark'>
                Artificial intelligence (AI) has emerged as a powerful force shaping the future of society, with applications ranging from healthcare and finance to transportation and entertainment. AI systems have the potential to revolutionize industries, improve efficiency, and enhance decision-making processes. However, they also raise ethical concerns regarding privacy, bias, and job displacement. As AI technologies continue to advance, it is essential to consider the social and ethical implications and ensure responsible development and deployment. By harnessing the opportunities of AI while addressing its challenges, we can strive towards a future where technology serves the greater good.
            </p>
        </div>
    )
}

export default ArticleDetail
