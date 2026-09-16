import React, { useState } from 'react';
import type { Post as PostType } from '../../types/post';
import { Post } from '../Post/Post';
import './PostList.css';

interface PostListProps {
  posts: PostType[];
}

// PostList component - Renders filtered list of posts with unique key props
export const PostList: React.FC<PostListProps> = ({ posts }) => {
  const [selectedAuthor, setSelectedAuthor] = useState<string>('All');

  const filteredPosts =
    selectedAuthor === 'All'
      ? posts
      : posts.filter((post) => post.author === selectedAuthor);

  return (
    <section className="post-list-container">
      <div className="feed-header">
        <h1 className="feed-title">Latest Developer Insights</h1>

        {/* Filter buttons for team members */}
        <div className="filter-group">
          {['All', 'Bonae Ineza', 'Keza Diane', 'Kagabo Jean'].map((author) => (
            <button
              key={author}
              className={`filter-btn ${selectedAuthor === author ? 'active' : ''}`}
              onClick={() => setSelectedAuthor(author)}
            >
              {author}
            </button>
          ))}
        </div>
      </div>

      {/* Render list of Post components using unique key prop */}
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <div className="empty-state">
          <p>No posts found for this author filter.</p>
        </div>
      )}
    </section>
  );
};
