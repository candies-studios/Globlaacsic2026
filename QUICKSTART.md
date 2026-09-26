# Quick Start Guide - ACSIC 2026 Local Website

## ⚡ 30-Second Setup

### Easiest Method: Open in Browser
1. Find `index.html` in this folder
2. Right-click → Open with → Your Browser
3. Click on navigation links to explore

**That's it!** The website works immediately.

---

## 🚀 Better Method: Use Python Server (No Installation Needed)

### On Windows:
```bash
# Open Command Prompt in this folder, then:
python -m http.server 8000
```

### On Mac/Linux:
```bash
# Open Terminal in this folder, then:
python3 -m http.server 8000
```

Then open your browser to: **http://localhost:8000**

---

## 📦 Advanced: Use Node.js (If You Have It)

```bash
# Install dependencies (one time only)
npm install

# Start server
npm start
```

Open browser to: **http://localhost:3000**

---

## 📱 What's Included

✅ **Home Page** - Event overview and highlights  
✅ **17 Content Pages** - All sections with full navigation  
✅ **Responsive Design** - Works on mobile, tablet, desktop  
✅ **Professional Styling** - Blue & gold color scheme  
✅ **Contact Info** - All event details included  

---

## 🗂️ File Structure

```
globalacsic2026/
├── index.html          ← Open this file
├── pages/              ← All other pages here
│   ├── welcome-message.html
│   ├── about-venue.html
│   ├── brief-program.html
│   └── ... (17 pages total)
├── assets/
│   └── css/
│       └── style.css   ← All styling here
└── README.md           ← Full documentation
```

---

## 🔧 Troubleshooting

### "CSS not loading / Site looks broken"
**Solution:** Use a local server instead of opening HTML directly
- Python: `python -m http.server 8000`
- Then go to: http://localhost:8000

### "Navigation links don't work"
**Solution:** Make sure you're using a server (not opening file directly)

### "Can't find pages"
**Solution:** Ensure the `pages/` folder is in the same directory as `index.html`

---

## 📖 For More Info

See `README.md` for complete documentation including:
- Detailed setup instructions
- Customization guide
- Deployment options
- Browser compatibility
- Technical details

---

## 🎯 Quick Features to Explore

1. **Responsive Design** - Resize browser window to see mobile layout
2. **Dropdown Menus** - Hover over "Information", "About", "Programs", "Visiting India"
3. **Navigation** - Click any link to jump between pages
4. **Footer Links** - Quick access to all pages at bottom
5. **Mobile View** - Press F12 → Click device icon for mobile preview

---

## ✨ Key Pages to Check

| Page | URL |
|------|-----|
| Home | `index.html` |
| Welcome | `pages/welcome-message.html` |
| Program | `pages/brief-program.html` |
| Visiting India | `pages/visiting-india.html` |
| Venue | `pages/about-venue.html` |
| Speakers | `pages/theme-topics.html` |

---

## 🎉 Ready to Go!

Pick any method above and start exploring. All content is fully functional locally.

**Questions?** Check README.md for detailed documentation.

---

**Website Status:** ✅ Complete & Ready for Local Development
