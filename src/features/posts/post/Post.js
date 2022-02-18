import './Post.css';
import darkImgUp from '../../../img/dark-img-up.png';
import darkImgDown from '../../../img/dark-img-down.png';
import lightImgUp from '../../../img/light-img-up.png';
import lightImgDown from '../../../img/light-img-down.png';
import darkImgComment from '../../../img/dark-img-comment.png';
import lightImgComment from '../../../img/light-img-comment.png';
import { useState } from 'react';
import Comments from './comments/Comments';
import { formatDate } from '../../../utilities/utilities';
import { useSelector } from 'react-redux';
import { selectAppearance } from '../../../app/appSlice';

export default function Post(props) {
    const { post } = props;

    const [ isShowingComments, setIsShowingComments ] = useState(false);

    const currAppearance = useSelector(selectAppearance);

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
                        <img alt='Up' src={currAppearance === 'dark' ? darkImgUp : lightImgUp}/>
                        <h3 data-testid='ups'>{post.numUps}</h3>
                        <img alt='Down' src={currAppearance === 'dark' ? darkImgDown : lightImgDown}/>
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
                                        src={currAppearance === 'dark' ? darkImgComment : lightImgComment} 
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