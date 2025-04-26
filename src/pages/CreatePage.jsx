import React from 'react';
import { useState } from 'react'
import '../index.css';
import Navbar from '../components/Navbar.jsx';


import supabase from '../supabase.js';

const CreatePage = () => {

  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");


  function handleTitle(value) {
    setTitle(value);
  }

  function handleCaption(value) {
    setCaption(value);
  }

  function handleImage(value) {
    setImage(value);
  }

  async function makePost() {
    if (title.length > 0) {
      const { error } = await supabase
      .from('hobbyhub')
      .insert({ title: title, caption: caption, image: image})
      setTitle("");
      setCaption("");
      setImage("");
    } 
  }

  return (
    <div className="create-container">
      <div className="nav-style">
      <h2> Pocket-Portfolio</h2>
        <Navbar />
      </div>
      

      
      <div className="create-box">
        <h1> Create your post! </h1>
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
          <div className="create-upload" onClick={() => makePost()}>
            <h3> Upload! </h3>
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default CreatePage;