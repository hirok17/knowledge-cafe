import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handelBookmark, handeltime}) => {
    const {id, cover, title, author_img, author, posted_date, reading_time, hashtags}=blog;
    return (
        <div className='mb-5'>
            <img className='w-[750px] rounded' src={cover} alt="" />
            <div className='flex justify-between items-center max-w-[750px] mt-6'>
                <div className='flex items-center gap-3'>
                    <img className='w-14' src={author_img} alt=""/>
                    <div>
                        <p className='text-2xl text-[#111] font-bold'>{author}</p>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='font-bold text-[#6047EC] mr-2'>{reading_time} min read</span>
                    <button onClick={()=>handelBookmark(blog)}><FaBookmark className='hover:text-[#6047EC]'></FaBookmark></button>  
                </div>
            </div>
            <h2 className='text-4xl font-bold text-[#111] mt-3'>{title}</h2>
            <p className='text-xl text-gray-500 mt-6'>{
                hashtags.map((hastag, idx)=><span key={idx}><a href="">#{hastag } </a></span>)
                }</p>
                <button onClick={()=>handeltime(reading_time,id)} className='text-pink-500 mt-4'>Mark as read</button>
        </div>
    );
};
Blog.propTypes ={
    blog:PropTypes.object.isRequired,
    handelBookmark:PropTypes.func,
    handeltime:PropTypes.number
}

export default Blog;