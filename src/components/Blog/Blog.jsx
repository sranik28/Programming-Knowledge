import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Blog = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("fakeData.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    
    return (
        <div className=' mt-10 col-span-2'>
           {
            blogs.map(blog=><Card blog={blog} key={blog.id}></Card>)
           }
        </div>
    );
};

export default Blog;