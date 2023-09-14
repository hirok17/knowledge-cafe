import { useEffect, useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handelBookmark, handeltime}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=> setBlogs(data))
        console.log(blogs);

    },[])
    return (
        <div className="w-3/4 mx-auto">
           
            {
                blogs.map(blog=><Blog key={blog.id} blog={blog} handelBookmark={handelBookmark}
                    handeltime={handeltime}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes={
    handelBookmark:PropTypes.func,
    handeltime:PropTypes.number
}
export default Blogs;