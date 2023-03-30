import React from 'react';

const Card = ({ blog }) => {
    const { authorName, authorImgUrl, blogTitle, coverImgUrl, readTime, publishDate, } = blog
    return (
        <div className='my-10'>
            <div className="card w-full bg-base-100 shadow-2xl">
                <figure><img src={coverImgUrl} alt="Shoes" /></figure>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-4 items-center'>
                        <img className='w-12 rounded-full my-2' src={authorImgUrl} alt="" />
                        <div>
                            <p className='font-bold text-lg'>{authorName}</p>
                            <small><p>{publishDate}</p></small>
                        </div>
                    </div>
                    <div className='flex'>
                        <p>{readTime}</p>
                        <button className='ml-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>
                        </button>
                    </div>
                </div>
                <h2 className="py-5 font-bold text-2xl">{blogTitle}</h2>
                <small><p className='py-5'> #beginners  #programming</p></small>
                <a className='pb-5 underline text-sky-700' href="/Mark as read">Mark as read</a>
            </div>
        </div>
    );
};

export default Card;
