import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment'

const BlogDetail = (props) => {

    const [blog, setBlog] = useState({});

    useEffect(() => {
        const slug = props.match.params.id;

        const fetchData = async () => {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/api/posts/${slug}`);
                setBlog(res.data);
            }
            catch (err) {

            }
        };

        fetchData();
    }, [props.match.params.id]);


    // Sanitize Post body
    const createBlog = () => {
        return {__html: blog.body}
    };


    return (
        <div className="col-md-7  m-auto">
            <div className="my-5">
                <Link to="/blog" className="text-decoration-none"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
                    &nbsp; Back to Home</Link>
                    
                <h2 className="mt-3 post-title">{blog.title}</h2>
                <p className="mt-3 text-muted">By <b>Sachin Sharma</b> On {moment(blog.timestamp).format('MMMM D, YYYY')}</p>
                <div className='mt-4 mb-5 post-body' dangerouslySetInnerHTML={createBlog()} />
            </div>
        </div>
    )
}

export default BlogDetail
