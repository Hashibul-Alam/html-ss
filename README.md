# Expert Tehnic în Construcții - Website Documentation

A modern, responsive, and SEO-friendly one-page website for construction technical services, featuring energy audits, technical expertise, and professional consultancy.

## 🎨 Design Overview

- **Color Scheme**:
  - Primary: Cream (#F9F4EC)
  - Accent: Emerald (#0E7B6B)
  - Modern, professional, and accessible design
- **Framework**: Tailwind CSS (via CDN)
- **JavaScript**: Vanilla JS (no heavy frameworks)
- **Typography**: Inter font family (Google Fonts)

## 📁 Project Structure

```
e:\html-ss\
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css      # Custom styles (works with Tailwind)
│   ├── js/
│   │   └── main.js        # All JavaScript functionality
│   └── img/               # Images folder
│       ├── logo.png       # Your logo (cream background)
│       ├── hero-bg.jpg    # Hero section background
│       ├── equipment-*.jpg # Equipment photos (4 images)
│       ├── equipment-showcase.jpg
│       ├── social-preview.jpg
│       └── favicon-*.png  # Favicon files
├── README.md              # This file
└── IMAGE_GUIDE.md         # Image sourcing guide
```

## ✨ Features

### 1. **Responsive Design**

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Tested on all major devices and browsers

### 2. **Interactive Components**

- ✅ Mobile hamburger menu with smooth toggle
- ✅ Smooth scroll navigation
- ✅ FAQ accordion (expand/collapse)
- ✅ Cost calculator (RON per year)
- ✅ Floating action buttons (Phone & WhatsApp)
- ✅ Lazy loading images
- ✅ Scroll animations

### 3. **SEO Optimized**

- Semantic HTML5 tags
- Meta descriptions and keywords
- Open Graph tags (Facebook/LinkedIn)
- Twitter Card tags
- Proper heading hierarchy
- Alt text for all images

### 4. **Accessibility**

- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible states
- Reduced motion support
- High contrast mode support
- Screen reader friendly

### 5. **Performance**

- Lazy loading for images
- Optimized assets
- Minimal dependencies (Tailwind CDN + Vanilla JS)
- Debounced scroll events
- CSS animations with GPU acceleration

## 🚀 Quick Start

### 1. Add Your Logo

Replace `/assets/img/logo.png` with your actual logo (200x200px recommended).

### 2. Add Images

Follow the `IMAGE_GUIDE.md` file to source and add all required images.

### 3. Update Contact Information

#### Phone Numbers

Replace `+407XXXXXXXX` with your actual phone number in:

**index.html** (multiple locations):

```html
<!-- Line ~572 (Contact section) -->
<a href="tel:+407XXXXXXXX">+40 7XX XXX XXX</a>

<!-- Line ~725 (Floating phone button) -->
<a href="tel:+407XXXXXXXX" class="floating-btn ...">
  <!-- Line ~735 (Floating WhatsApp button) -->
  <a href="https://wa.me/407XXXXXXXX?text=..."></a
></a>
```

#### Email Address

Replace `contact@expert-tehnic.ro` with your email:

**index.html** (multiple locations):

```html
<!-- Line ~585 -->
<a href="mailto:contact@expert-tehnic.ro">contact@expert-tehnic.ro</a>
```

**main.js**:

```javascript
// Line ~247
const mailtoLink = `mailto:contact@expert-tehnic.ro?subject=${subject}&body=${body}`;
```

### 4. Open in Browser

Simply open `index.html` in any modern browser to view your website.

## 🎯 Customization Guide

### Changing Colors

#### Method 1: Edit Tailwind Config (index.html)

```html
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          cream: "#F9F4EC", // Change this
          emerald: {
            DEFAULT: "#0E7B6B", // Change this
            dark: "#0A5F52", // Change this
            light: "#12A594", // Change this
          },
        },
      },
    },
  };
</script>
```

#### Method 2: Edit CSS Variables (style.css)

```css
:root {
  --color-cream: #f9f4ec; /* Change this */
  --color-emerald: #0e7b6b; /* Change this */
  --color-emerald-dark: #0a5f52; /* Change this */
  --color-emerald-light: #12a594; /* Change this */
}
```

### Editing Text Content

All text is in `index.html`. Use Find & Replace or edit directly:

#### Hero Section

```html
<!-- Lines ~75-86 -->
<h1>Expert Tehnic în Construcții</h1>
<p>Audite energetice, expertize tehnice...</p>
```

#### Services Section

```html
<!-- Lines ~95-200 -->
<!-- Edit service cards -->
```

#### FAQ Section

```html
<!-- Lines ~435-550 -->
<!-- Edit questions and answers -->
```

### Modifying the Calculator

The calculator uses RON per year pricing. Edit `main.js`:

```javascript
// Lines ~130-155
const pricingRates = {
  apartment: {
    baseRate: 150, // Change: RON per m² per year
    minCost: 800, // Change: Minimum cost
  },
  house: {
    baseRate: 180, // Change: RON per m² per year
    minCost: 1200, // Change: Minimum cost
  },
  commercial: {
    baseRate: 200, // Change: RON per m² per year
    minCost: 2000, // Change: Minimum cost
  },
};

const additionalServices = {
  thermalImaging: 500, // Change: RON per year
  moistureCheck: 300, // Change: RON per year
  urgent: 400, // Change: RON per year
};
```

### Customizing Floating Buttons

#### Change Phone Number

```html
<!-- index.html, line ~725 -->
<a href="tel:+40123456789" ...></a>
```

#### Change WhatsApp Number & Message

```html
<!-- index.html, line ~735 -->
<a href="https://wa.me/40123456789?text=Your%20custom%20message" ...></a>
```

#### Change Button Colors

```css
/* style.css, lines ~593-613 */
.floating-btn-phone {
  background: rgba(14, 123, 107, 0.95); /* Change color */
}

.floating-btn-whatsapp {
  background: rgba(37, 211, 102, 0.95); /* Change color */
}
```

#### Remove a Button

Simply delete the entire `<a>` tag from `index.html`.

### Adding/Removing Services

To add a new service card:

```html
<!-- Copy this template and modify -->
<article class="service-card">
  <div class="service-icon">
    <!-- Add SVG icon here -->
  </div>
  <h3 class="text-xl font-semibold mb-3 text-emerald">Service Title</h3>
  <p class="text-gray-600 leading-relaxed">Service description goes here.</p>
</article>
```

Find free icons at:

- Heroicons: https://heroicons.com/
- Feather Icons: https://feathericons.com/
- Bootstrap Icons: https://icons.getbootstrap.com/

### Adding New Sections

Follow this structure:

```html
<section id="new-section" class="py-20 bg-white">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="section-title">Section Title</h2>
      <p class="section-subtitle">Section description</p>
    </div>
    <!-- Your content here -->
  </div>
</section>
```

Don't forget to add to navigation:

```html
<li><a href="#new-section" class="nav-link">New Section</a></li>
```

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+
- ⚠️ Internet Explorer: Not supported (use modern browsers)

## 🔧 Testing

### Lighthouse Audit

1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Run audit for:
   - Performance
   - Accessibility
   - Best Practices
   - SEO

Target scores: 90+ in all categories

### Responsive Testing

Test on these viewports:

- Mobile: 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1920px

### Browser Testing

Use these tools:

- BrowserStack: https://www.browserstack.com/
- LambdaTest: https://www.lambdatest.com/
- Or test manually in different browsers

## 🌐 Deployment

### Option 1: Netlify (Recommended - Free)

1. Create account at https://netlify.com
2. Drag and drop your project folder
3. Your site is live instantly!
4. Free SSL certificate included
5. Custom domain support

### Option 2: Vercel (Free)

1. Create account at https://vercel.com
2. Import from GitHub or upload folder
3. Instant deployment
4. Free SSL and CDN

### Option 3: GitHub Pages (Free)

1. Create GitHub repository
2. Upload your files
3. Enable GitHub Pages in settings
4. Site available at `username.github.io/repo-name`

### Option 4: Traditional Web Hosting

1. Get hosting (e.g., SiteGround, Bluehost, HostGator)
2. Use FTP client (FileZilla) to upload files
3. Upload everything to `public_html` folder
4. Access via your domain

### Pre-Deployment Checklist

- [ ] All images added and optimized
- [ ] Contact information updated
- [ ] Phone numbers updated
- [ ] Email addresses updated
- [ ] Calculator prices adjusted
- [ ] Test all links
- [ ] Test all forms
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Check browser compatibility
- [ ] Update meta tags with your domain
- [ ] Add Google Analytics (optional)

## 🔐 Security Best Practices

1. **Never expose sensitive data** in HTML/JS
2. **Use HTTPS** (free with most hosts)
3. **Validate form inputs** on server-side (if you add a backend)
4. **Keep dependencies updated** (Tailwind CDN, fonts)
5. **Use CSP headers** if hosting yourself

## 📊 Analytics (Optional)

To add Google Analytics:

1. Get your tracking ID from Google Analytics
2. Add before closing `</head>` tag in `index.html`:

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "YOUR-ID");
</script>
```

## 🐛 Troubleshooting

### Images not loading

- Check file paths are correct
- Ensure images exist in `/assets/img/`
- Check file extensions match (`.jpg` vs `.jpeg`)
- Clear browser cache (Ctrl+F5)

### Styles not applying

- Check `style.css` path is correct
- Ensure Tailwind CDN is loading
- Check browser console for errors
- Clear browser cache

### JavaScript not working

- Check browser console for errors (F12)
- Ensure `main.js` path is correct
- Check if script is before closing `</body>` tag
- Try in incognito/private mode

### Mobile menu not opening

- Check `main.js` is loaded
- Verify IDs match: `mobile-menu-btn`, `mobile-menu`
- Check console for JavaScript errors

### Calculator not working

- Ensure all form IDs are correct
- Check `main.js` calculator logic
- Verify number inputs accept values
- Check console for errors

## 📞 Support

For issues or questions:

- Check this README thoroughly
- Review `IMAGE_GUIDE.md` for image issues
- Check browser console for errors
- Test in incognito mode to rule out extensions

## 📝 License

This website template is provided as-is for your business use.

### You can:

- ✅ Use commercially for your business
- ✅ Modify all content and styling
- ✅ Deploy to any hosting platform
- ✅ Remove or add features

### You should:

- 📝 Update all placeholder content
- 📝 Add your own images
- 📝 Test thoroughly before going live
- 📝 Keep code organized and documented

## 🎓 Learning Resources

### Tailwind CSS

- Docs: https://tailwindcss.com/docs
- Playground: https://play.tailwindcss.com/

### HTML & CSS

- MDN Web Docs: https://developer.mozilla.org/
- CSS Tricks: https://css-tricks.com/

### JavaScript

- MDN JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- JavaScript.info: https://javascript.info/

### SEO

- Google SEO Guide: https://developers.google.com/search/docs
- Moz Beginner's Guide: https://moz.com/beginners-guide-to-seo

## 🔄 Version History

### v1.0.0 (Current)

- ✅ Initial production-ready release
- ✅ All features implemented
- ✅ Fully responsive design
- ✅ SEO optimized
- ✅ Accessibility compliant
- ✅ Performance optimized

## 🚀 Future Enhancements (Optional)

Consider adding:

- [ ] Backend for contact form (PHP, Node.js)
- [ ] Blog section with CMS
- [ ] Portfolio/Projects gallery
- [ ] Client testimonials carousel
- [ ] Multi-language support (RO/EN)
- [ ] Dark mode toggle
- [ ] Live chat integration
- [ ] Booking system integration

## ✅ Final Checklist

Before going live:

- [ ] Logo uploaded and displays correctly
- [ ] All images added and optimized (see IMAGE_GUIDE.md)
- [ ] Phone number updated everywhere
- [ ] Email address updated everywhere
- [ ] WhatsApp link configured
- [ ] Calculator prices adjusted
- [ ] All text content reviewed and finalized
- [ ] Colors match your brand (if changed)
- [ ] Meta tags updated with your info
- [ ] Social preview image created and added
- [ ] Favicons generated and added
- [ ] Tested on mobile, tablet, desktop
- [ ] Tested in Chrome, Firefox, Safari
- [ ] All links working correctly
- [ ] Forms tested (contact, calculator)
- [ ] Lighthouse score 90+ in all categories
- [ ] Privacy policy added (if collecting data)
- [ ] Terms of service added (if needed)
- [ ] Google Analytics added (optional)
- [ ] Backup of all files created
- [ ] Domain name configured
- [ ] SSL certificate active (HTTPS)

---

**Need help?** Review this documentation carefully. All common customizations are explained in detail above.

**Ready to launch?** Follow the deployment section and complete the final checklist.

**Good luck with your website! 🎉**
