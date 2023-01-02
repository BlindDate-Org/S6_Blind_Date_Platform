import React from 'react'

import Blog from '../../components/QandA/Blog.jsx';
import allblogs from '../../data/allblogs.json'
const Blogs = () => {
    return (
        <div className="bg-gray-200 py-4 dark:bg-gray-800">
            <div className="md:w-1/2 mx-2 md:mx-auto">
                {allblogs.map((blog) => (
                    <Blog blog={blog} key={blog.id} />
                ))}
            </div>
        </div>
    )
}

export default Blogs