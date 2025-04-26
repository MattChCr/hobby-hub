import React from 'react';
import { useState, useEffect } from 'react';
import {Link, useNavigate, useParams } from 'react-router-dom';

import '../index.css';
import supabase from '../supabase.js';
import CommentSection from '../components/CommentSection.jsx';
import Navbar from '../components/Navbar.jsx';

const PostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comment, setComment] = useState("");
    const navigate = useNavigate();
  
    async function deletePost() {
      const response = await supabase
          .from('hobbyhub')
          .delete()
          .eq('id', id);
          navigate('/');    
    }   

    async function updateLikes() {
        const { error } = await supabase
        .from('hobbyhub')
        .update({ upvotes: post.upvotes + 1})
        .eq('id', id)
        fetchPost();
    }

    function handleComment(value) {
      setComment(value);
    }

    async function updateComments() {
      if (comment.length > 0 && comment != "Leave a comment..") {
        const { error } = await supabase
        .from('hobbyhub')
        .update({ comments: [...post.comments, comment]})
        .eq('id', id)
        fetchPost();
        setComment("");
      }   
    }

    const fetchPost = async () => {
      const { data, error } = await supabase
        .from('hobbyhub')
        .select('*')
        .eq('id', id)
        .single();
  
      if (error) console.error('Error fetching post:', error);
      else setPost(data);
    };
  
    useEffect(() => {
      fetchPost();
    }, [id]);
  
    if (!post) return <p>Loading...</p>;
  
    return (
      <div className="post-basic">
        <div className="nav-style">
          <h2> Pocket-Portfolio</h2>
          <Navbar />
        </div>

          <div className="post-details">
              
              <div className="post-detail">
                <h1>{post.title}</h1>
                <h4>{post.caption}</h4> 
                <p> Likes: {post.upvotes}  </p>
                <div onClick={() => updateLikes()}> 👍 </div>
              </div>
              <div className="post-detail">
                <img src={post.image} width="200px" />
              </div>
              

        </div>
        <div className="button-set">
          <div className="button">
              <Link to={`/posts/update/${id}`}>
              Edit
              </Link>
          </div>
          <div className="button" onClick={() => deletePost()}>
              Delete
          </div>
          </div>
          <div className="Date"> 
            <p> Posted on {new Date(post.created_at).toLocaleString()}</p>  
           </div>      

          <div className="comment-section">
           <form onSubmit={(e) => {
            e.preventDefault();
            updateComments();
          }}>

            <input
                type="text"
                value={comment}
                onChange={(e) => handleComment(e.target.value)}
                placeholder="Leave a comment..."
            />
            <button type="submit">Post Comment</button>
        </form>

        <CommentSection id = {post.id} comments = {post.comments}></CommentSection> 
          </div>
          
        
      </div>
    );
  };
  
  export default PostPage;