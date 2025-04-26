import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';

import '../index.css';

import supabase from '../supabase.js';
import Navbar from '../components/Navbar.jsx';


const UpdatePage = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  
    
  useEffect(() => {
    handleSetUp();
  }, []);

  const handleSetUp = async () => {
    
      const { data, error } = await supabase
        .from('hobbyhub')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) console.error('Error fetching post:', error);
      else 
      handleTitle(data.title);
      handleCaption(data.caption);
      handleImage(data.image);
  };

  function handleTitle(value) {
    setTitle(value);
  }

  function handleCaption(value) {
    setCaption(value);
  }

  function handleImage(value) {
    setImage(value);
  }

  async function updatePost() {
    if (title.length > 0) {
      const { error } = await supabase
      .from('hobbyhub')
      .update({ title: title, caption: caption, image: image})
      .eq('id', id)
      handleSetUp();
      navigate(`/posts/${id}`);
    }   
  }

  return (
    <div className="create-container">
      <div className="nav-style">
      <h2> Pocket-Portfolio</h2>
        <Navbar />
      </div>

      
      <div className="create-box">
        <h1> Update your post! </h1>
        <div className="create-slot">
          <h2> Title:</h2>
          <form>
            <input
                type="text"
                value={title}
                onChange={(e) => handleTitle(e.target.value)}
            />
        </form>
        </div>
        <div className="create-slot">
          <h2> Caption (Optional): </h2>
          <form>
            <input
                type="text"
                value={caption}
                onChange={(e) => handleCaption(e.target.value)}
            />
        </form>
        </div>
        <div className="create-slot">
          <h2> Image (Optional):</h2>
          <form>
            <input
                type="text"
                value={image}
                onChange={(e) => handleImage(e.target.value)}
            />
        </form>
        </div>
        <div className="create-slot">
          <div className="create-upload" onClick={() => updatePost()}>
            <h3> Update! </h3>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default UpdatePage;