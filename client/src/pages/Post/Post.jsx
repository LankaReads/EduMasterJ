import React, { useState, useEffect } from 'react';
import Footer from '@/components/Footer/Footer';
import NavBar from '@/components/NavBar/Nav';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [expandedPostId, setExpandedPostId] = useState(null);

    // Fetch posts from server
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/posts');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, []);

    const handleReadMore = (id) => {
        setExpandedPostId(expandedPostId === id ? null : id);
    };

    return (
        <>
            <NavBar />
            <div className="container my-5">
                <h1 className="text-center mb-5" style={{ color: '#f42d00' }}>All Posts</h1>
                <div className="row">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post._id} className="col-md-6 mb-4">
                                <div className="card h-100 shadow-sm">
                                    <img src={post.image} className="card-img-top" alt={post.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{post.title}</h5>
                                        <p className="card-text">
                                            {expandedPostId === post._id ? post.content : `${post.content.substring(0, 100)}...`}
                                        </p>
                                        <p className="card-text">
                                            <small className="text-muted">By {post.author} on {new Date(post.date).toLocaleDateString()}</small>
                                        </p>
                                        {post.links && post.links.length > 0 && (
                                            <div>
                                                <h6>Resources:</h6>
                                                <ul>
                                                    {post.links.map((link, index) => (
                                                        <li key={index}><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                    <div className="card-footer d-flex justify-content-between align-items-center">
                                        <button
                                            className="btn btn-outline-primary"
                                            style={{ borderColor: '#f42d00', color: '#f42d00' }}
                                            onClick={() => handleReadMore(post._id)}
                                        >
                                            {expandedPostId === post._id ? 'Show Less' : 'Read More'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No posts available.</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Posts;