import React from 'react';
import {Link} from 'react-router-dom';


const PostPreview = ({ id, title, date, upvotes}) => {
  return (
    <div className="preview-card">
      <Link to={`/posts/${id}`}>
        
        <h2>{title}</h2>
        <h4>Likes: {upvotes}</h4> 
        <p> Posted on {new Date(date).toLocaleString()}</p>       
      </Link>
    </div>
  );
};

export default PostPreview;