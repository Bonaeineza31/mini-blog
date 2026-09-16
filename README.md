# Dev Insights - Mini Blog Platform

**Student:** Bonae Ineza  
**Course:** Formative Assessment 1 - React & TypeScript Project  


---

## About the Project

Dev Insights is a simple internal blog platform built for web developers to share quick tips and updates. I built this app using React, Vite, and TypeScript 
---

## How to Run the App

1. Clone this repository:
   ```bash
   git clone https://github.com/Bonaeineza31/mini-blog.git
   cd mini-blog
   ```

2. Install project packages:
   ```bash
   npm install
   ```

3. Start the dev server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

---

## Folder Structure

```
mini-blog/
├── src/
│   ├── components/
│   │   ├── Header/       # Top navigation header with New Post button
│   │   ├── Post/         # Individual blog post card
│   │   └── PostList/     # List of blog posts with author filter buttons
│   ├── data/             # Sample posts data (mockPosts.ts)
│   ├── hoc/              # withLogger Higher-Order Component
│   ├── types/            # TypeScript Post interface (post.ts)
│   ├── App.tsx           # Main app component
│   ├── App.css           # App layout styling
│   └── index.css         # Reset CSS styles
├── INSTRUCTION.md        # Assessment instructions
├── README.md             # Project documentation
└── package.json
```

---

## My Choices & Reflections

### 1. Functional Components vs Class Components
I chose functional components for this project. Functional components are simpler to write, clean to read, and work smoothly with React hooks and `React.memo` optimization.

### 2. Styling Methods Used
I applied two styling methods:
- **External CSS**: Used separate CSS files (`Header.css`, `Post.css`, `PostList.css`) for layout structure, fonts, and button styles.
- **Inline Styles**: Used dynamic inline styles in `Post.tsx` to set category badge colors and to highlight posts written by **Bonae Ineza** with a light blue background and accent border.

### 3. Optimization and HOC
- **`React.memo`**: I wrapped the `Post` component with `React.memo` so it avoids re-rendering when props do not change.
- **Unique `key` Props**: Rendered post lists using `key={post.id}` to help React track items efficiently.
- **`withLogger` HOC**: Created a Higher-Order Component (`withLogger.tsx`) that prints a log message to the browser console when `PostList` mounts and unmounts.

### 4. Challenges & Solutions
A minor challenge was deciding how to handle dates in TypeScript. Storing dates as readable text strings (`"2026-09-16"`) made it simple to render dates directly in post cards without complex date formatting code.

### 5. External Packages Used
- `react` & `react-dom`
- `typescript`
- `vite`
