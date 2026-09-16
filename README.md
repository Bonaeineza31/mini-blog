# Dev Insights - Mini Blog Platform

Formative Assessment 1: React "Mini Blog" Project  
Student Developer: Bonae Ineza (Kigali, Rwanda)  
Tech Stack: React 19, TypeScript, Vite, CSS3  

---

## Project Overview

Dev Insights is an internal mini-blog platform built with React and TypeScript using Vite. It allows team members to share quick development tips and insights.

This project fulfills the Formative Assessment 1 requirements:
- **TypeScript Integration**: Created a `Post` interface for post data objects (`src/types/post.ts`).
- **Core Components**: Built `Header`, `Post`, `PostList`, and `App` components.
- **Styling Methods**: Used External CSS stylesheets along with Dynamic Inline Styles for category tags and author background highlighting.
- **Conditional Styling**: Highlighted posts written by **Bonae Ineza** with a light blue background, and added a "New!" badge for recent posts.
- **Optimization & HOC**: Wrapped `Post` with `React.memo`, used unique `key` props on list mapping, and created a `withLogger` Higher-Order Component to log mount/unmount messages to the console.

---

## How to Run the Application

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Bonaeineza31/mini-blog.git
   cd mini-blog
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## Project Structure

```
mini-blog/
├── src/
│   ├── components/
│   │   ├── Header/       # Header component with Dev Insights title and New Post button
│   │   ├── Post/         # Post card component (React.memo)
│   │   └── PostList/     # List component with author filter buttons
│   ├── data/             # Mock dataset with Rwandan author posts
│   ├── hoc/              # withLogger Higher-Order Component
│   ├── types/            # TypeScript post interface
│   ├── App.tsx           # Main application root
│   ├── App.css           # App layout styling
│   └── index.css         # Base CSS reset
├── README.md
└── package.json
```

---

## Architectural Choices & Reflections

### Functional vs Class Components
I chose functional components using React Hooks because functional components are modern, concise, and easy to optimize using `React.memo`.

### Styling Methods
I combined External CSS files (`Header.css`, `Post.css`, `PostList.css`) for layout structure with dynamic inline styles in `Post.tsx` to handle category badge background colors and conditional author highlighting.

### Optimization & HOC
- `React.memo` stops `Post` cards from re-rendering if their props have not changed.
- Unique `key={post.id}` props allow React to track list items efficiently.
- `withLogger` logs when components mount and unmount in the browser console.

### External Libraries Used
- `react` & `react-dom` (v19)
- `typescript` (v5)
- `vite` (v6)
