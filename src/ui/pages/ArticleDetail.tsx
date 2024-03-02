import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Article from '../../interfaces/Article';
import AxiosHelper from '../../api/AxiosHelper';
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getArticleDetailThunk } from '../../redux/articlesDetailSlice';

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
