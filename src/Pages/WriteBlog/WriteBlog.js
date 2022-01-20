import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const WriteBlog = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('blogTitle', data.blogTitle)
        formData.append('article', data.article)
        formData.append('blogImage', data.blogImage[0])
        fetch('http://localhost:5000/blogs', {
            method: 'POST',
            headers:{
                'authorization':`Bearer ${localStorage.getItem('idToken')}`
            },
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                alert('Data add successfully')
                reset();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    return (
        <div className='d-flex justify-content-center'>
            <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
                <h3 className='m-5'>Write Your Blog</h3>
                <div className='d-flex'>
                    <div className='me-3'>

                        <input style={{ width: "300px" }} placeholder='Blog Title'  {...register("blogTitle", { required: true })} />
                    </div>
                    <div>

                        <input style={{ width: "200px", height: "45px" }} placeholder='Upload image' type='file' accept='image/*' alt='' {...register("blogImage", { required: true })} />

                    </div>

                </div>

                <textarea style={{ width: "500px", height: "100px" }} placeholder='article' id='text-field' {...register("article")} />
                <br />
                <Button type='submit'> Post</Button>
            </form>

        </div>
    );
};

export default WriteBlog;