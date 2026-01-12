# Workflow: Adding a New Blog Post

Follow these steps to add real content to your website:

### 1. Create the Post File
1. Open the `/blog/` folder.
2. Duplicate `template.html` and rename it (e.g., `my-new-post.html`).
3. Open the new file and update:
   - `<title>` in the `<head>` section.
   - `<h1 class="hero-title">` for the post title.
   - `<time>` for the date.
   - Add your content inside the `<div class="about-card">`.

### 2. Update the Blog Archive
1. Open `blog/index.html`.
2. Find the `<ol class="post-list">` section.
3. Replace the "Coming soon" placeholder (or add above it) with a new link:
   ```html
   <li class="post">
     <time class="post-date">Jan 20, 2026</time>
     <div class="post-body">
       <a class="post-title" href="/blog/my-new-post.html">My New Post Title</a>
       <p class="post-excerpt">A 1-2 sentence hook for your readers.</p>
     </div>
   </li>
   ```

### 3. Update the Landing Page (Optional)
1. Open `index.html`.
2. Do the same as step 2 in the "Latest" section to show your new post on the home page.

### 4. Deploy to GitHub
1. In your terminal, run:
   ```bash
   git add .
   git commit -m "Add new blog post: [Title]"
   git push origin main
   ```

### 5. Verify Live
Wait about 60 seconds and check [gilded-gecko-c98d9d.netlify.app](https://gilded-gecko-c98d9d.netlify.app/)!
