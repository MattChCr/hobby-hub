import React from 'react';
import { useState, useEffect } from 'react';

import '../index.css';
import supabase from '../supabase.js';
import PostPreview from '../components/PostPreview.jsx';
import Navbar from '../components/Navbar.jsx';


const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(false); /* False = Creation-Time Sorting | True = Upvote Sorting */

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

   

  const fetchPosts = async () => {
    if (sort) {
      const { data, error } = await supabase.from('hobbyhub').select('*').order('upvotes', { ascending: false });
      if (error) {
          console.error('Error fetching posts:', error);
        } else {
          setPosts(data);
        }
    }
    else {
      const { data, error } = await supabase.from('hobbyhub').select('*').order('created_at', { ascending: false });
      if (error) {
          console.error('Error fetching posts:', error);
        } else {
          setPosts(data);
        }
    }
    
  };

  
  useEffect(() => {
    fetchPosts();
  }, [sort]);


  return (
    <div className="home-feed">
      <div className="nav-style">
        <h2> Pocket-Portfolio</h2>
        <Navbar />
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
      </div>

      <div className="feed-grid">
      < div className="sort-set">
          <div className={`by-date ${sort ? "" : "toggled"}`} onClick={() => setSort(false)}>
              <p> Most Recent </p>
          </div>
          <div className={`by-votes ${sort ? "toggled" : ""}`} onClick={() => setSort(true)}>
              <p> Most Liked </p>
          </div>
        </div>

      {filteredPosts.map((post) => (
        <PostPreview
          key={post.id}
          id={post.id}
          title={post.title}
          date={post.created_at}
          upvotes={post.upvotes}
        />
))}
      </div>
    </div>
  );
};

export default HomePage;