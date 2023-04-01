import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Blog = ({bookMarkItems , setBookMarkItems , setReadTime , readTime}) => {

    const [blogs, setBlogs] = useState([]);

    const addBookMark = (title) => {
        const previous = [...bookMarkItems]
        if (previous.includes(title)) {
            toast.error('already added!')               
        }
        else {
            const newBookMark = [...bookMarkItems, title]
            setBookMarkItems(newBookMark)
        }   
    }

    const countReadingTime = (blog) => {
        const time = readTime + blog.readTime;
        setReadTime(time)
    }



    useEffect(() => {
        fetch("fakeData.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    
    return (
        <div className="col-span-2">
            {
                blogs.map((blog) => <Card blog={blog} key={blog.id} addBookMark={addBookMark} countReadingTime={countReadingTime}></Card>)
            }
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Blog;