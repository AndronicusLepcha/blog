import React from 'react'

const SearchPosts = () => {
    return (
        <div className="pl-3">
            <form method="get" action="http://127.0.0.1:8000/api/posts/?search=">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Search posts" />
                    <input type="submit" className="btn btn-secondary" value="search" />
                </div>
            </form>
        </div>
    )
}

export default SearchPosts
