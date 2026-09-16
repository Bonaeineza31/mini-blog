// This interface defines what a single blog post object looks like in TypeScript.
// It acts like a template for creating blog posts.
export interface Post {
  // Unique ID to identify each post (e.g., "post-1")
  id: string;

  // The main title of the blog post
  title: string;

  // The full name of the author who wrote the post
  author: string;

  // The job title or role of the author (e.g., "Senior Frontend Engineer")
  authorRole: string;

  // The main text content or summary of the blog post
  content: string;

  // We store the date as a string (like "2026-09-16") because text dates are easy to format and display directly in React components
  date: string;

  // How long it takes to read the post (e.g., "4 min read")
  readTime: string;

  // The main topic of the post (e.g., "React", "TypeScript", "CSS")
  category: string;

  // Optional true/false flag to check if the post was added recently (used for displaying the "New!" badge)
  isNew?: boolean;
}
