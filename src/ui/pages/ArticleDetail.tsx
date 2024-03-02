import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getArticleDetailThunk, resetArticleDetails } from '../../redux/slice/articlesDetailSlice';
import Shimmer from '../components/Shimmer';
import ErrorComponent from '../components/ErrorComponent';

const ArticleDetail = () => {

    // Capture params from route
    let { id, slug } = useParams();
    const navigate = useNavigate();


    const dispatch: AppDispatch = useDispatch()

    const { isLoading, data: article, errorMessage } = useSelector((state: RootState) => state.articleDetail)

    useEffect(() => {
        if (!id || !slug) {
            navigate('/not-found')
        }

        dispatch(getArticleDetailThunk(id ?? ''))

        return () => {
            // clear current opened data on unmount
            dispatch(resetArticleDetails())
        }
    }, [])

    return (
        <div className='container py-5'>
            {
                isLoading
                && (<div className="py-4" >
                    <Shimmer className="mb-3" />
                    <Shimmer className="mb-3" height='20px' width="100%" />
                    <Shimmer width="100%" height='200px' />
                </div>)
            }
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
            {
              (!isLoading && !errorMessage && !article) &&  <ErrorComponent>No data to display</ErrorComponent>
            }
            {
                errorMessage && <ErrorComponent>{errorMessage}</ErrorComponent>
            }
        </div>
    )
}

export default ArticleDetail
