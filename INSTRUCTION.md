# Formative Assessment: React "Mini Blog" Project

**Submission:** Canvas Submission (link to your GitHub repository)  
**Grading:** Formative assessment grade (15 points total)  

---

## Scenario
You are a junior developer at a startup called **"Dev Insights."** They want to create an internal "Mini Blog" platform where employees can share quick tips, insights, and updates related to web development. Your task is to build the foundation of this platform using React, demonstrating your understanding of TypeScript, Vite, components, styling, and optimization learned in the first three weeks. Please do not use any React Template for this assessment.

---

## Project Requirements

### 1. Project Setup (Vite & TypeScript)
- Initialize a new React project using Vite with TypeScript support.
- Ensure your project has a proper directory structure for components, styles, and potentially utility functions.

### 2. Core Components (React Basics & Component Types)
- **Header Component**: A functional component displaying the "Dev Insights" logo and a navigation link to "New Post".
- **PostList Component**: Displays a list of blog posts with sample data. Each post displays title, author name, preview content, and date posted. Proper TypeScript types for the post object.
- **Post Component**: Reusable component rendering single blog post details.
- **App Component**: Root component rendering Header and PostList components.

### 3. Styling (CSS & Styling Techniques)
- Apply styling to your components using at least two methods (External CSS files, Inline styles, etc.).
- Implement conditional styling for at least one element (e.g., highlight posts by a specific author, or show a "New!" badge for recent posts).

### 4. Component Optimization & Higher-Order Components (HOCs)
- Implement component optimization using `React.memo` or `PureComponent`.
- Use a unique `key` prop for each item when rendering lists.
- Create a simple HOC (`withLogger`) that logs a message to the console when a component is mounted and unmounted.

### 5. Documentation (README)
- Clear instructions on how to install, run, and test the application using Vite.
- Explain choices regarding component types, styling methods, and optimization strategies.
- Reflect on challenges faced and list external packages used.
