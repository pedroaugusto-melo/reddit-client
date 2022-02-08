import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Comment from './comment/Comment';
import './Comments.css';
import { fetchComments, selectComments, selectIsErrorComments, selectIsLoadingComments, setPostId } from './commentsSlice';

export default function Comments(props) {
    const { postURL, postId } = props;

    const dispatch = useDispatch();

    const commentsData = useSelector(selectComments);
    const isLoadingComments = useSelector(selectIsLoadingComments);
    const isErrorComments = useSelector(selectIsErrorComments);

    console.log('Comments: ', commentsData);

    useEffect(() => {
        if(!commentsData[postId]) {
            dispatch(setPostId(postId));
            dispatch(fetchComments(postURL));
        } 
    }, [dispatch, postURL, postId, commentsData]);

    return (
        <div className='Comments' data-testid='Comments'>
            {isLoadingComments && 
                <h3>Loading...</h3>
            }

            {isErrorComments && 
                <h3>Failed to load comments.</h3>
            }
        </div>
    );
}