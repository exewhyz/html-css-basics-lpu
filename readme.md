# Blog Website - Assignment 1

## 📋 Project Overview

This is a modern, responsive blog website interface built with **HTML5**, **CSS3**, and **Grid Layout**. The website showcases a clean and professional design with an engaging hero section and a featured blog section displaying blog cards with complete metadata.

## 🎯 Features

### Hero Section
- Eye-catching gradient background (purple to violet)
- Compelling headline and tagline
- Call-to-action button with hover effects
- Fully centered and responsive design
- Text shadow effects for better readability

### Featured Blogs Section
- Grid-based responsive layout (auto-fit columns)
- Multiple blog cards with the following components:
  - **Image**: Blog post cover image (200px height with object-fit)
  - **Title**: Blog post headline (1.3em font size)
  - **Description**: Blog post summary (limited preview text)
  - **Updated Date**: Publication or last update date with calendar icon
  - **Author Name**: Writer attribution with user icon

### Blog Card Features
- Smooth hover animations (lift effect and shadow expansion)
- Image zoom animation on hover
- Clean typography and spacing
- Responsive grid layout
- Box shadows for depth and visual hierarchy

## 📁 File Structure

```
blog/
├── index.html          # Main HTML structure
└── style.css           # Styling and layout
```

## 🏗️ HTML Structure

```html
<!-- Header with Navigation -->
<header class="header">
  <nav class="navbar">...</nav>
</header>

<!-- Sidebar -->
<aside class="sidebar">...</aside>

<!-- Main Content Area -->
<main class="main">
  <!-- Hero Section -->
  <section class="hero">...</section>
  
  <!-- Featured Blogs Section with Cards -->
  <section class="featured">
    <div class="blog-grid">
      <article class="blog-card">...</article>
      <!-- More cards -->
    </div>
  </section>
</main>

<!-- Footer -->
<footer class="footer">...</footer>
```

## 🎨 CSS Layout Details

### Grid System
- **Main Container**: 2-column layout with sidebar and main content
- **Blog Grid**: Responsive auto-fit grid with minimum 280px column width
- **Gap**: 25px spacing between cards for clean appearance

### Color Scheme
- **Hero Gradient**: `#667eea` to `#764ba2` (Purple to Violet)
- **Text Colors**: Dark gray (#333) for headings, light gray (#666) for descriptions
- **Card Background**: White with subtle shadows
- **Meta Text**: Light gray (#999) for secondary information

### Typography
- **Headings**: 600-700 font weight for emphasis
- **Body Text**: 0.95em-1em for readability
- **Line Height**: 1.4-1.6 for comfortable reading

## 🔧 CSS Classes

| Class | Purpose |
|-------|---------|
| `.hero` | Hero section container with gradient background |
| `.hero-content` | Text and button wrapper in hero section |
| `.cta-btn` | Call-to-action button styling |
| `.featured` | Featured blogs section |
| `.blog-grid` | Grid container for blog cards |
| `.blog-card` | Individual blog card container |
| `.blog-image` | Image wrapper with overflow hidden |
| `.blog-content` | Text content wrapper |
| `.blog-meta` | Metadata section (author and date) |

## 📱 Responsive Design

- **Auto-fit Grid**: Columns automatically adjust based on screen size
- **Minimum Column Width**: 280px ensures readability on all devices
- **Flexible Spacing**: Padding and gaps scale appropriately
- **Touch-friendly**: Buttons and cards have adequate spacing for mobile interaction

## 🎬 Animations & Transitions

### Blog Cards
```css
/* Lift effect on hover */
transform: translateY(-8px);

/* Shadow expansion */
box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);

/* Image zoom effect */
.blog-image img:hover {
  transform: scale(1.05);
}
```

### CTA Button
```css
/* Lift effect on hover */
transform: translateY(-2px);
transition: all 0.3s ease;
```

## 📝 Blog Card Data Structure

Each blog card contains:

```html
<article class="blog-card">
  <div class="blog-image">
    <img src="image-url" alt="Blog Title" />
  </div>
  <div class="blog-content">
    <h3>Blog Title</h3>
    <p class="blog-desc">Blog Description/Preview</p>
    <div class="blog-meta">
      <span class="author">👤 Author Name</span>
      <span class="date">📅 Date Updated</span>
    </div>
  </div>
</article>
```

## 🚀 Getting Started

1. **Open the File**: Open `blog/index.html` in a web browser
2. **View the Layout**: See the responsive grid layout in action
3. **Test Hover Effects**: Hover over cards to see animations
4. **Responsive Testing**: Resize the browser to see responsive behavior

## 💡 Key Learning Points

- **CSS Grid**: Advanced grid layout with auto-fit
- **Flexbox**: Flexible card layouts and content alignment
- **Hover Effects**: Smooth transitions and transforms
- **Responsive Design**: Mobile-first responsive grid approach
- **Semantic HTML**: Proper use of `<article>`, `<section>`, `<aside>` tags
- **CSS Box Shadow**: Creating depth with box shadows
- **Linear Gradients**: Professional background styling

## 🎓 Educational Value

This assignment teaches students:
- Modern CSS Grid and Flexbox layouts
- Responsive web design principles
- Card-based UI component design
- CSS animations and transitions
- HTML semantic structure
- Professional design patterns

## 📊 Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile Browsers: ✅ Full responsive support

## 🔮 Future Enhancements

- [ ] Add filtering/category system
- [ ] Implement search functionality
- [ ] Add pagination for more blogs
- [ ] Create individual blog post pages
- [ ] Add comments section
- [ ] Implement dark mode toggle
- [ ] Add blog categories/tags
- [ ] Create admin panel for managing posts

## 📝 Notes

- Images use placeholder URLs (via.placeholder.com) - replace with actual images
- Meta information (authors, dates) are hardcoded - consider using a backend for dynamic content
- The layout is fully responsive but optimized for desktop and tablet viewing

---

**Created for**: LPU Web Development Assignment 1  
**Last Updated**: January 22, 2026  
**Version**: 1.0
