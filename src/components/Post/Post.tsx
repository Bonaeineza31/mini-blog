import React from 'react';
import type { Post as PostType } from '../../types/post';
import './Post.css';

// Component props
interface PostProps {
  post: PostType;
}

// Inline style generator for category tags
const getCategoryStyle = (category: string): React.CSSProperties => {
  switch (category) {
    case 'React':
      return { backgroundColor: '#dbeafe', color: '#1d4ed8' };
    case 'TypeScript':
      return { backgroundColor: '#e0e7ff', color: '#4338ca' };
    case 'CSS':
      return { backgroundColor: '#fae8ff', color: '#86198f' };
    case 'Performance':
      return { backgroundColor: '#fef3c7', color: '#b45309' };
    default:
      return { backgroundColor: '#f1f5f9', color: '#475569' };
  }
};

// Reusable Post Component
const PostComponent: React.FC<PostProps> = ({ post }) => {
  // Highlight posts written by Bonae Ineza using conditional inline styling
  const isBonae = post.author === 'Bonae Ineza';

  const cardInlineStyle: React.CSSProperties = isBonae
    ? {
        backgroundColor: '#eff6ff', // Light blue highlight background
        borderLeft: '4px solid #3b82f6', // Accent blue left border
      }
    : {};

  return (
    <article className="post-card" style={cardInlineStyle}>
      <div className="post-header">
        <h2 className="post-title">{post.title}</h2>
        {/* Render "New!" badge for posts published within last 24h */}
        {post.isNew && <span className="badge-new">New!</span>}
      </div>

      <div className="post-meta">
        <span className="author-name">{post.author}</span>
        {post.authorRole && (
          <span className="author-role">({post.authorRole})</span>
        )}
        <span className="post-dot">•</span>
        <span className="post-date">{post.date}</span>
      </div>

      <p className="post-content">{post.content}</p>

      <div className="post-footer">
        <span className="category-badge" style={getCategoryStyle(post.category)}>
          {post.category}
        </span>
        <span className="read-time">{post.readTime}</span>
      </div>
    </article>
  );
};

// Wrap with React.memo for component optimization
export const Post = React.memo(PostComponent);
