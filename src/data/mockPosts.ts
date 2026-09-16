import type { Post } from '../types/post';

// Sample blog posts by Rwandan team members at Dev Insights
export const INITIAL_POSTS: Post[] = [
  {
    id: 'post-1',
    title: 'Getting Started with React 19 and Custom Hooks',
    author: 'Bonae Ineza',
    authorRole: 'Senior Frontend Engineer',
    content:
      'Custom hooks make it easy to separate state logic from UI components. In this post, I share how our team uses custom hooks for cleaner component code.',
    date: '2026-09-16', // Published today -> shows "New!" badge
    readTime: '4 min read',
    category: 'React',
    isNew: true,
  },
  {
    id: 'post-2',
    title: 'Why We Use TypeScript in Our React Projects',
    author: 'Keza Diane',
    authorRole: 'Fullstack Developer',
    content:
      'TypeScript helps catch bugs early by enforcing prop types and data structures before running code in the browser.',
    date: '2026-09-14',
    readTime: '5 min read',
    category: 'TypeScript',
    isNew: false,
  },
  {
    id: 'post-3',
    title: 'CSS Grid vs Flexbox: When to Use Each Layout',
    author: 'Bonae Ineza', // Highlighted author
    authorRole: 'Senior Frontend Engineer',
    content:
      'Flexbox works great for single-row navigation bars, while CSS Grid is best for multi-column post feeds and card layouts.',
    date: '2026-09-10',
    readTime: '3 min read',
    category: 'CSS',
    isNew: false,
  },
  {
    id: 'post-4',
    title: 'Improving Component Performance with React.memo',
    author: 'Kagabo Jean',
    authorRole: 'Tech Lead',
    content:
      'By wrapping list items in React.memo and providing unique key props, React skips re-rendering unchanged post cards.',
    date: '2026-09-05',
    readTime: '4 min read',
    category: 'Performance',
    isNew: false,
  },
];
