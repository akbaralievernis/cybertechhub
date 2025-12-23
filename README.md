CyberTech Hub - Modern IT Gaming & Education Hub
https://img.shields.io/badge/Preview-Live-blue?style=for-the-badge
https://img.shields.io/badge/Hosted-GitHub%2520Pages-success?style=for-the-badge
https://img.shields.io/badge/License-MIT-green?style=for-the-badge

🌐 Live Demo
View the Live Website on GitHub Pages

🎯 About The Project
CyberTech Hub is a modern, fully responsive business website for a unique "3-in-1" space that combines:

🎮 Gaming Zone with premium PCs and tournaments

💻 IT Education Center with programming courses

☕ Coffee Shop with specialty drinks and desserts

This is a production-ready business platform built with pure HTML, CSS, and JavaScript, featuring premium animations, interactive components, and a seamless user experience.

✨ Key Features
🎨 Modern Design
Dark tech aesthetic with glassmorphism effects

Smooth animations and micro-interactions

Premium typography (Orbitron + Inter fonts)

Fully responsive across all devices

🛠️ Interactive Functionality
Course Selection System with filtering by category

Tournament Registration with live countdown timers

Coffee Shop Menu with item categorization

Unified Shopping Cart across all services

Payment Simulation with card validation

🚀 Technical Excellence
No backend required (100% frontend)

LocalStorage for cart persistence

Pure CSS/JS animations (no heavy libraries)

Optimized performance and loading speed

Clean, maintainable code structure

📱 Pages & Sections
1. Hero Section
Animated statistics counters

Bold value proposition

Multiple CTA buttons

2. Concept Showcase
Gaming Zone card with tournament info

IT Education card with course highlights

Coffee Shop card with menu preview

3. Courses Section
Filterable course catalog (Programming, Design, Languages)

Course cards with duration, level, and pricing

"Add to Cart" functionality

Scholarship information for tournament winners

4. Tournaments Section
Upcoming tournament schedule

Live countdown timers

Prize pool displays

Registration system

5. Coffee Shop Section
Interactive menu with categories

Product cards with descriptions

Special offers and student discounts

Add items to cart

6. Shopping Cart & Checkout
Unified cart for all services

Quantity management

Payment modal simulation

Order confirmation

🛠️ Technologies Used
HTML5 - Semantic markup

CSS3 - Custom properties, Flexbox, Grid, Animations

JavaScript (ES6+) - DOM manipulation, LocalStorage, Intersection Observer

Font Awesome - Icons

Google Fonts - Orbitron & Inter fonts

📁 Project Structure
text
cybertech-hub/
├── index.html              # Main HTML file
├── README.md               # This documentation
└── assets/                 # Optional for future assets
    ├── images/
    └── fonts/
🚀 Quick Start
Option 1: GitHub Pages (Recommended)
Fork this repository

Go to repository Settings → Pages

Select main branch as source

Your site will be live at https://yourusername.github.io/cybertech-hub/

Option 2: Local Development
Clone the repository:

bash
git clone https://github.com/yourusername/cybertech-hub.git
Open index.html in your browser

No build process or dependencies required!

🎨 Customization Guide
Change Business Information
Edit the following sections in index.html:

Contact details in the contact section

Course prices and descriptions

Tournament schedules and prizes

Menu items and pricing

Modify Colors
Edit CSS custom properties in the <style> section:

css
:root {
    --accent-blue: #00e0ff;      /* Primary blue */
    --accent-pink: #ff007f;      /* Secondary pink */
    --accent-green: #00ff9d;     /* Success green */
    --bg-primary: #0a0e17;       /* Main background */
}
Add New Courses
Add to the coursesData array in JavaScript:

javascript
{
    id: 7,
    title: "New Course Name",
    description: "Course description here",
    category: "programming",      // or "design", "language", "free"
    duration: "3 месяца",
    level: "Начальный",
    price: 12000,
    originalPrice: 15000,
    badge: "new",                // "popular", "new", "free", or null
    icon: "fas fa-code"          // Font Awesome icon class
}
📱 Responsive Breakpoints
Mobile: < 576px (optimized for smartphones)

Tablet: 576px - 992px

Desktop: > 992px

🌍 Browser Support
Chrome 60+

Firefox 55+

Safari 12+

Edge 79+

Opera 50+

📊 Performance Metrics
✅ No external dependencies (fast loading)

✅ Optimized images (none currently, SVG icons only)

✅ Minified CSS/JS (inline for GitHub Pages)

✅ Lazy loading animations

🤝 Contributing
Contributions are welcome! Here's how:

Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📝 License
Distributed under the MIT License. See LICENSE for more information.

📞 Contact & Support
For questions or support:

Create an Issue

Email: hello@cybertechhub.kg (update in index.html)

Telegram: @cybertechhub

🙏 Acknowledgments
Font Awesome for icons

Google Fonts for typography

Inspiration from modern tech startups and gaming hubs

