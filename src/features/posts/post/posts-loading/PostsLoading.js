import { Skeleton } from '@mui/material';
import './PostsLoading.css';

export default function PostLoading() {
    return (
        <>
            <div className='PostLoadingMobile'>
                <div className='UpsAnimantion'>
                    <Skeleton
                        className='UpAnimation' 
                        variant='rectangular'
                        style={{backgroundColor: '#FFFFFF', borderRadius: 20}}  
                        width='10vw'
                        height='80px' />
                </div>
                <div className='DataAnimation'>
                    <Skeleton 
                        variant='rectangular' 
                        style={{backgroundColor: '#FFFFFF', borderRadius: 20}} 
                        width='55vw'
                        height='40px' />
                    <Skeleton 
                        variant='rectangular'
                        style={{backgroundColor: '#FFFFFF', borderRadius: 20}} 
                        width='55vw'
                        height='20px' />
                </div>  
            </div>
            <div className='PostLoadingMobile'>
                <div className='UpsAnimantion'>
                    <Skeleton
                        className='UpAnimation' 
                        variant='rectangular'
                        style={{backgroundColor: '#FFFFFF', borderRadius: 20}}  
                        width='10vw'
                        height='80px' />
                </div>
                <div className='DataAnimation'>
                    <Skeleton 
                        variant='rectangular' 
                        style={{backgroundColor: '#FFFFFF', borderRadius: 20}} 
                        width='55vw'
                        height='40px' />
                    <Skeleton 
                        variant='rectangular'
                        style={{backgroundColor: '#FFFFFF', borderRadius: 20}} 
                        width='55vw'
                        height='20px' />
                </div>  
            </div>
            <div className='PostLoadingMobile'>
                <div className='UpsAnimantion'>
                    <Skeleton
                        className='UpAnimation' 
                        variant='rectangular'
                        style={{backgroundColor: '#FFFFFF', borderRadius: 20}}  
                        width='10vw'
                        height='80px' />
                </div>
                <div className='DataAnimation'>
                    <Skeleton 
                        variant='rectangular' 
                        style={{backgroundColor: '#FFFFFF', borderRadius: 20}} 
                        width='55vw'
                        height='40px' />
                    <Skeleton 
                        variant='rectangular'
                        style={{backgroundColor: '#FFFFFF', borderRadius: 20}} 
                        width='55vw'
                        height='20px' />
                </div>  
            </div>
            

            <div className='PostLoadingDesktop'>
                <div className='UpsAnimantion'>
                    <Skeleton
                        className='UpAnimation' 
                        variant='rectangular'
                        style={{backgroundColor: '#FFFFFF', borderRadius: 20}}  
                        width='5vw'
                        height='80px' />
                </div>
                <div className='DataAnimation'>
                    <Skeleton 
                        variant='rectangular' 
                        style={{backgroundColor: '#FFFFFF', borderRadius: 20}} 
                        width='43vw'
                        height='40px' />
                    <Skeleton 
                        variant='rectangular'
                        style={{backgroundColor: '#FFFFFF', borderRadius: 20}} 
                        width='43vw'
                        height='20px' />
                </div>  
            </div>
            <div className='PostLoadingDesktop'>
                <div className='UpsAnimantion'>
                    <Skeleton
                        className='UpAnimation' 
                        variant='rectangular'
                        style={{backgroundColor: '#FFFFFF', borderRadius: 20}}  
                        width='5vw'
                        height='80px' />
                </div>
                <div className='DataAnimation'>
                    <Skeleton 
                        variant='rectangular' 
                        style={{backgroundColor: '#FFFFFF', borderRadius: 20}} 
                        width='43vw'
                        height='40px' />
                    <Skeleton 
                        variant='rectangular'
                        style={{backgroundColor: '#FFFFFF', borderRadius: 20}} 
                        width='43vw'
                        height='20px' />
                </div>  
            </div>
            <div className='PostLoadingDesktop'>
                <div className='UpsAnimantion'>
                    <Skeleton
                        className='UpAnimation' 
                        variant='rectangular'
                        style={{backgroundColor: '#FFFFFF', borderRadius: 20}}  
                        width='5vw'
                        height='80px' />
                </div>
                <div className='DataAnimation'>
                    <Skeleton 
                        variant='rectangular' 
                        style={{backgroundColor: '#FFFFFF', borderRadius: 20}} 
                        width='43vw'
                        height='40px' />
                    <Skeleton 
                        variant='rectangular'
                        style={{backgroundColor: '#FFFFFF', borderRadius: 20}} 
                        width='43vw'
                        height='20px' />
                </div>  
            </div>
            
      </>
    );
}