import {useState, useEffect} from 'react'
import axios from 'axios';
import Pagination from './Pagination'
import {Link} from 'react-router-dom'
import moment from 'moment'
import About from './About';
import Category from './Category';
import SearchPosts from './SearchPosts';



const BlogContainer = () => {

    const [blog, setBlog] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);


    //Get posts from Backend
    useEffect(() => {
        const fetchBlog = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts/');
            setBlog(res.data);
            setLoading(false);
          };

        fetchBlog()
    }, [])


    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blog.slice(indexOfFirstPost, indexOfLastPost);


    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);


    // Truncate posts 
    const truncatePost = (word) => {
        if (word)
            return word.slice(0, 150)+ "...";
        return '';
    };

   


    //Render Posts 
    const getBlog = () => {
        let list = []
        let result = []

        if (loading){
            <p>loading..</p>
        }

        currentPosts.map(post => {
            return list.push(
                <div className="card-body">
                    <h3 className="card-title post-title"> <Link to={`/${post.slug}`} className="text-decoration-none">{post.title}</Link> </h3>
                    <div className='mt-4 mb-5 post-body' dangerouslySetInnerHTML={{__html: truncatePost(post.body)}} />
                    <span className="text-muted">Posted on  {moment(post.timestamp).format('MMMM D, YYYY')} </span>
                </div>
            )
        })

        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div key={i}>
                    <div>
                        {list[i]}
                    </div>
                    <div>
                        {list[i+1] ? list[i+1] : null}
                    </div>
                </div>
            )
        }

        return result;
    }


    return(
        <div className="container my-4">
            <div className="row">
                <div className="col-md-8 col-sm-12">
                    <div className="mb-3">
                        <h3 className="pl-3">Latest Posts</h3>
                    </div>

                    <SearchPosts /> 

                    {getBlog()}

                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={blog.length}
                        paginate={paginate}
                    />
                </div>
                
                <div className="col-md-4 col-sm-12">
                    <About />
                    <Category />
                </div>
            </div>
            
        </div>
    )
}


export default BlogContainer