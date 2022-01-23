
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import BlogCard from '../BlogCard/BlogCard';

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <Row xs={1} md={3} className="g-4">
                {
                    blogs.map(blog => <BlogCard
                        blog={blog}
                        key={blog._id}
                    ></BlogCard>)
                }

            </Row>

        </div>
    );
};

export default Blog;