# Global Symposium & 38th ACSIC Conference 2026 - Local Clone

This is a complete static HTML clone of the official website for the Global Symposium & 38th ACSIC Conference 2026 on Credit Guarantee.

## 📋 Project Overview

**Event:** Global Symposium & 38th ACSIC Conference 2026  
**Dates:** April 23-24, 2026  
**Location:** The Taj Mahal Palace, Mumbai, India  
**Theme:** Shaping the future of Credit Guarantee System

## 📁 Project Structure

```
globalacsic2026/
├── index.html                 # Home page
├── assets/
│   ├── css/
│   │   └── style.css         # Main stylesheet
│   ├── js/                   # JavaScript files (if needed)
│   └── images/               # Image assets (placeholder)
├── pages/                    # Individual page files
│   ├── welcome-message.html
│   ├── about-venue.html
│   ├── key-vision.html
│   ├── cgtmse.html
│   ├── ministry.html
│   ├── acsic.html
│   ├── about-members.html
│   ├── theme-topics.html
│   ├── brief-program.html
│   ├── detailed-program.html
│   ├── accompanying-persons.html
│   ├── culture-tour.html
│   ├── visiting-india.html
│   ├── transportation.html
│   ├── about-mumbai.html
│   └── login.html
├── README.md                 # This file
├── package.json              # Node.js dependencies
└── server.js                 # Local server (optional)
```

## 🚀 Getting Started

### Option 1: Direct File Opening (Simplest)

1. **Open the home page:**
   - Double-click `index.html` or drag it into your browser
   - All pages are fully functional with this method

### Option 2: Using Python HTTP Server

If you have Python installed:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open your browser to `http://localhost:8000`

### Option 3: Using Node.js + Express

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

   Or directly:
   ```bash
   node server.js
   ```

3. **Open in browser:**
   Navigate to `http://localhost:3000`

### Option 4: Using PHP

If you have PHP:

```bash
php -S localhost:8000
```

## 📖 Website Structure

### Main Sections

1. **Home** (`index.html`)
   - Hero section with event details
   - Why participate section
   - Who should attend
   - Key focus areas
   - Event highlights
   - Call-to-action sections

2. **Information**
   - Welcome Message
   - About the Venue
   - Key Vision

3. **About**
   - CGTMSE
   - Ministry of Micro, Small and Medium Enterprises
   - ACSIC
   - About Members

4. **Programs**
   - Theme & Topics
   - Brief Program
   - Detailed Program
   - Accompanying Persons Program
   - Culture Tour

5. **Visiting India**
   - Visiting India (General Information)
   - Transportation
   - About Mumbai

6. **Login** - Registration page

## 🎨 Design Features

### Colors
- **Primary Blue:** #002d5c
- **Gold Accent:** #d4af37
- **Light Background:** #f8f9fa
- **Text Dark:** #333
- **Text Light:** #666

### Responsive Design
- Fully responsive layout
- Mobile-friendly navigation
- Tablet and desktop optimized
- Flexible grid system

### Components
- Sticky header with dropdown navigation
- Hero sections
- Card-based layouts
- Countdown timer (placeholder)
- Feature lists with checkmarks
- Footer with multiple sections

## 🔧 Customization

### Modify Colors
Edit `assets/css/style.css`:
```css
:root {
  --primary-color: #002d5c;
  --gold-color: #d4af37;
  /* ... other colors */
}
```

### Add Content
Each page is a standard HTML file. Edit any page directly to:
- Update event information
- Add new sections
- Modify text and images
- Change links

### Add Images
1. Place images in `assets/images/`
2. Reference them in HTML:
   ```html
   <img src="../assets/images/your-image.png" alt="Description">
   ```

## 📱 Browser Compatibility

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔗 Navigation Structure

All pages are interconnected via:
- Main navigation menu (top)
- Dropdown submenus
- Footer links
- Internal page links

## 📝 Content Sections

### Home Page Highlights
- **Hero Section:** Event title, dates, location
- **Why Participate:** 5 key reasons
- **Who Should Attend:** 5 target audience groups
- **Key Focus Areas:** 3 main focus themes
- **About the Event:** Event overview
- **What's Included:** 3 event components
- **Venue Information:** Taj Mahal Palace details
- **Event Statistics:** Speakers, countries, participants
- **Call-to-Action:** Registration buttons

## 🎯 Event Information

**Event Dates:** April 23-24, 2026  
**Registration:** Opens via login page  
**Venue:** The Taj Mahal Palace, Mumbai, India  
**Theme:** Strengthening Global Credit Guarantee Ecosystems Through Cooperation, Innovation & Resilience

### Contact Information
- **Phone:** +91 93217 02103 / +91 93217 02104
- **Email:** global.38acsic@cgtmse.in
- **Address:** 1st Floor, SIDBI Swavalamban Bhavan, Bandra-Kurla Complex, Mumbai 400 051

## 🎓 Educational Use

This clone can be used for:
- Web development learning
- Website redesign prototyping
- Content management practice
- Responsive design study
- CSS and HTML practice

## 📦 Deployment

To deploy this website:

1. **GitHub Pages:**
   - Push to a GitHub repository
   - Enable Pages in Settings
   - Site automatically published

2. **Web Hosting:**
   - Upload files via FTP
   - Ensure index.html is in root
   - Configure web server

3. **Local Network:**
   - Use provided server files
   - Access via local IP address

## 🛠️ Technical Details

### Files Included
- HTML5 semantic markup
- CSS3 with CSS Grid and Flexbox
- Responsive mobile-first design
- No external dependencies (pure CSS)
- Optional Node.js server setup

### Performance
- Lightweight CSS (~15KB)
- No JavaScript dependencies
- Fast page load times
- Mobile optimized

## 📄 License

This is a clone for development and testing purposes. The original website content belongs to CGTMSE and ACSIC organizations.

## 🐛 Troubleshooting

### Issue: CSS not loading
- Ensure you're opening files through a server (Python/Node/PHP)
- Check file paths in HTML are correct
- Clear browser cache

### Issue: Navigation not working
- Verify relative paths are correct
- Check file names match links
- Use server (not direct file opening) for proper paths

### Issue: Mobile display issues
- Check viewport meta tag is present
- Use browser developer tools (F12)
- Test on actual mobile device

## 📚 Resources

### To Run Local Server
- Python: `python -m http.server 8000`
- PHP: `php -S localhost:8000`
- Node.js: `npm install express` then `node server.js`

### Browser DevTools
- Open with F12 or Right-click → Inspect
- Test responsive design
- Check console for errors

### CSS Framework
- Pure CSS (no Bootstrap or other framework)
- Uses CSS Grid and Flexbox
- Fully customizable

## 🎉 Features

✅ Complete website structure  
✅ All navigation pages  
✅ Responsive design  
✅ Professional styling  
✅ Contact information  
✅ Multiple footer sections  
✅ Dropdown menus  
✅ Card-based layouts  
✅ Mobile-optimized  
✅ Easy to customize  

## 📞 Support

For issues with this clone, check:
1. File paths and structure
2. Browser console for errors
3. Server is running (if using local server)
4. Browser is updated to latest version

---

**Created:** 2026  
**Last Updated:** September 26, 2026  
**Status:** Ready for Local Development & Testing
