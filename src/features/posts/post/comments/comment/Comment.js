import './Comment.css';
import { formatDate } from '../../../../../utilities/utilities';

export default function Comment(props) {
    const { commentData } = props;

    return (
        <div className='Comment'>
            <div className='CommentHeader'>
                <h3>{commentData.author}</h3>
                <h4 data-testid='comment-date'>
                    {formatDate(commentData.createdUTC)}
                </h4>
            </div>

            <div className='CommentText'>
                <h2>{commentData.text}</h2>
            </div>
        </div>
    );
}