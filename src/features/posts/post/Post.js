import './Post.css';
import imgUp from '../../../img/img-up.png';
import imgDown from '../../../img/img-down.png';
import imgComment from '../../../img/img-comment.png';
import { useState } from 'react';
import Comments from './comments/Comments';
import { formatDate } from '../../../utilities/utilities';

export default function Post(props) {
    const { post } = props;

    const [ isShowingComments, setIsShowingComments ] = useState(false);

    const toggleShowComments = () => {
        const postContentClasses = document.getElementById(post.id).querySelector('.PostContent').classList;

        if(!isShowingComments) {
            postContentClasses.add('comments-active');
        } else {
            postContentClasses.remove('comments-active');
        }

        setIsShowingComments(prevIsShowingComments => !prevIsShowingComments);  
        
    };

    return (
        <div 
            className='Post' 
            data-testid='Post'
            id={post.id}>

                <div className='PostContent' >
                    <div className='PostUps'>
                        <img alt='Up' src={imgUp}/>
                        <h3 data-testid='ups'>{post.numUps}</h3>
                        <img alt='Down' src={imgDown}/>
                    </div>

                    <div className='PostSummary'>
                        <h2 data-testid='title'>{post.title}</h2>
                        
                        <div className='AuthorAndComments'>
                            <h4 data-testid='author'>{post.author}</h4>

                            <div 
                                className='CommentsStatus'
                                onClick={toggleShowComments}
                            >
                                    <img 
                                        data-testid='btn-comments' 
                                        alt='Comments' 
                                        src={imgComment} 
                                    />
                                    <h5 data-testid='num-comments'>{post.numComments}</h5>
                            </div>
                        </div>

                        <h6 data-testid='date'>{formatDate(post.createdUTC)}</h6>
                    </div>
                </div>

                {isShowingComments && 
                    <Comments 
                        postURL={post.url}
                        postId={post.id} />
                }
            </div>
    );
}