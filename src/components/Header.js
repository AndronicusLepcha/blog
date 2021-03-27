import React from 'react'
import './css/style.css'

const Header = () => {
    return (
        <div className="bg-light text-center blog-header">

            <div className="col-md-6 m-auto">
                <h1 className="mb-4 blog-heading">The Sachin's Blog</h1>
                <p className="text-muted m-auto blog-heading">Exploring & Sharing the things I'm learning from life, work, books and travel. Join my weekly newsletter to be an insider & making sure you don't miss anything.</p>
            </div>

            <div className="newsletter-form">

                <div id="revue-embed">
                    <form action="https://www.getrevue.co/profile/sachinshrmaa/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
        
                        <input className="revue-form-field newsletter-inp py-3" placeholder="Your email address..." type="email" name="member[email]" id="member_email" />
                        <input type="submit" value="Join" name="member[subscribe]" id="member_submit" className="px-5 btn btn-primary m-2 py-3" />
                    
                    </form>
                </div>



                <ul class="nav justify-content-center mt-5">
                    <li class="nav-item">
                        <a class="nav-link" target="blank" href="https://twitter.com/sachinshrmaa/">Twitter</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" target="blank" href="https://facebook.com/sachinshrmaa/">Facebook</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" target="blank" href="https://instagram.com/sachinshrmaa/">Instagram</a>
                    </li>
                </ul>

            </div>

        </div>
    )
}

export default Header
