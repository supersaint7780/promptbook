"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

function PromptCardList({ data, handleTagClick }) {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => {
        return <PromptCard key={post._id} post={post} handleTagClick={handleTagClick}/>;
      })}
    </div>
  );
}

export default function Feed() {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {};

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search For a tage or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        ></input>
      </form>
      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
}
