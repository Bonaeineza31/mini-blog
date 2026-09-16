import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { PostList } from './components/PostList/PostList';
import { withLogger } from './hoc/withLogger';
import { INITIAL_POSTS } from './data/mockPosts';
import './App.css';

// Apply Higher-Order Component (withLogger) to wrap PostList component
const LoggedPostList = withLogger(PostList);

// App Root Component
export const App: React.FC = () => {
  const [posts] = useState(INITIAL_POSTS);

  return (
    <div className="app-container">
      {/* Header Component */}
      <Header />

      {/* Main Content Feed */}
      <main className="main-content">
        {/* Render PostList wrapped with withLogger HOC */}
        <LoggedPostList posts={posts} />
      </main>
    </div>
  );
};

export default App;
