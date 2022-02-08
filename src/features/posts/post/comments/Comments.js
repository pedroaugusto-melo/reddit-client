import { useEffect, useState } from 'react';
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

    const [ isShowingAllComents, setIsShowingAllComents ] = useState(false);

    console.log('Comments: ', commentsData);

    useEffect(() => {
        if(!commentsData[postId]) {
            dispatch(setPostId(postId));
            dispatch(fetchComments(postURL));
        } 
    }, [dispatch, postURL, postId, commentsData]);

    function handleShowAllComments() {
        setIsShowingAllComents(true);
    }

    function handleShowLessComments() {
        setIsShowingAllComents(false);
    }

    const manageCommentsToShow = () => {
        if(commentsData[postId]) {
            if(commentsData[postId].length > 5 && !isLoadingComments ) {
                if(!isShowingAllComents) {
                    return (
                        <h3 onClick={handleShowAllComments}>
                            Show all comments
                        </h3>  
                    );
                } else {
                    return (
                        <h3 onClick={handleShowLessComments}>
                             Show less comments
                        </h3>
                    );
                }
            }
        } else {
            return null;
        }
    }

    return (
        <div className='Comments' data-testid='Comments'>
            {isLoadingComments && 
                <h3>Loading...</h3>
            }

            {commentsData[postId] &&
                <ul>
                    {commentsData[postId].map((commentData, idx) => {
                        if(!isShowingAllComents && idx > 4) return null;

                        return (
                            <li key={commentData.id}>
                                <Comment commentData={commentData} />
                            </li>
                        );
                    })}
                </ul>
            }


            {isErrorComments && 
                <h3>Failed to load comments.</h3>
            }

            {manageCommentsToShow()}

        </div>
    );
}