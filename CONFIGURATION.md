# Website Configuration Guide

This file provides a quick reference for all the key configurations you need to update.

## 🎨 Brand Colors

### Current Colors:

- **Primary (Cream)**: `#F9F4EC`
- **Accent (Emerald)**: `#0E7B6B`
- **Emerald Dark**: `#0A5F52`
- **Emerald Light**: `#12A594`

### Where to Change:

1. **index.html** (line ~45-51): Tailwind config
2. **assets/css/style.css** (line ~7-11): CSS variables

---

## 📞 Contact Information

### Phone Number

**Current**: `+407XXXXXXXX`

**Update in index.html**:

- Line ~572: Contact section display
- Line ~725: Floating phone button
- Line ~735: WhatsApp button

### Email Address

**Current**: `contact@expert-tehnic.ro`

**Update in**:

- **index.html** (line ~585): Contact section
- **assets/js/main.js** (line ~247): Form handler

### Business Address

**Current**: `București și Ilfov`

**Update in index.html**:

- Line ~601: Location section

### Working Hours

**Current**:

- Luni - Vineri: 09:00 - 18:00
- Sâmbătă: 10:00 - 14:00

**Update in index.html**:

- Line ~613-614: Working hours section

---

## 💰 Calculator Pricing (RON per year)

### Current Rates:

**Apartment**:

- Base rate: 150 RON/m²/year
- Minimum: 800 RON/year

**House/Villa**:

- Base rate: 180 RON/m²/year
- Minimum: 1200 RON/year

**Commercial Building**:

- Base rate: 200 RON/m²/year
- Minimum: 2000 RON/year

**Additional Services**:

- Thermal imaging: 500 RON/year
- Moisture check: 300 RON/year
- Urgent service: 400 RON/year extra

**Update in**: `assets/js/main.js` (lines ~130-155)

---

## 🌐 SEO & Meta Information

### Website Title

**Current**: "Expert Tehnic în Construcții - Audite Energetice & Expertize Tehnice"

**Update in index.html** (line ~30)

### Meta Description

**Current**: "Expert tehnic în construcții - audite energetice, expertize tehnice, certificări profesionale..."

**Update in index.html** (line ~6)

### Keywords

**Current**: "expert tehnic, construcții, audit energetic, expertiză tehnică..."

**Update in index.html** (line ~7)

### Website URL

**Current**: `https://www.yourwebsite.ro/`

**Update in index.html**:

- Line ~12: Open Graph URL
- Line ~18: Twitter URL

---

## 📱 Social Media Preview

### Open Graph Image

**Path**: `/assets/img/social-preview.jpg`
**Size**: 1200x630px

**Update in index.html** (line ~16)

### Twitter Card

**Type**: summary_large_image
**Image**: `/assets/img/social-preview.jpg`

**Update in index.html** (line ~22)

---

## 🎯 Navigation Menu

### Current Menu Items:

1. Servicii (#servicii)
2. Echipament (#echipament)
3. Clienți (#target)
4. FAQ (#faq)
5. Calculator (#calculator)
6. Contact (#contact)

**To add a new menu item**:

1. Add section to HTML with unique `id`
2. Add link to desktop menu (line ~65)
3. Add link to mobile menu (line ~76)

---

## 🛠️ Services Section

### Current Services (6 total):

1. Audite Energetice
2. Expertize Tehnice
3. Certificări și Avize
4. Consultanță Tehnică
5. Verificări Imobile
6. Proiecte Speciale

**To modify**: Edit in index.html (lines ~95-200)

---

## 🔧 Equipment Section

### Current Equipment (4 items):

1. Camere Termice
2. Detectoare Umiditate
3. Analizoare Gaze
4. Instrumente Măsurare

**Images needed**:

- `/assets/img/equipment-1.jpg` (600x400px)
- `/assets/img/equipment-2.jpg` (600x400px)
- `/assets/img/equipment-3.jpg` (600x400px)
- `/assets/img/equipment-4.jpg` (600x400px)
- `/assets/img/equipment-showcase.jpg` (800x600px)

**To modify**: Edit in index.html (lines ~220-280)

---

## 👥 Target Audience Section

### Current Targets (6 categories):

1. Proprietari Particulari 🏡
2. Investitori & Developeri 🏢
3. Companii & Instituții 🏭
4. Constructori 🏗️
5. Bănci & Asigurări 🏦
6. Cabinet Avocatură ⚖️

**To modify**: Edit in index.html (lines ~305-370)

---

## ❓ FAQ Section

### Current FAQ Items (6 questions):

1. Ce este un audit energetic?
2. Cât durează o expertiză tehnică?
3. Care sunt costurile?
4. Ce documente primesc?
5. În ce zone lucrați?
6. Cum pot programa?

**To add/remove**: Edit in index.html (lines ~385-545)

---

## 📊 Footer Information

### Certifications

**Current**:

- Auditor energetic certificat ANRE
- Expert tehnic autorizat MDLPA
- Membru Ordinul Inginerilor Constructori

**Update in index.html** (line ~711-714)

### Copyright

**Current**: "© 2025 Expert Tehnic în Construcții"

**Update in index.html** (line ~722)

---

## 🎨 Fonts

### Current Font: Inter

- **Source**: Google Fonts
- **Weights used**: 300, 400, 500, 600, 700

**To change font**:

1. Update link in index.html (line ~60)
2. Update Tailwind config in index.html (line ~54)

---

## 🖼️ Images Checklist

### Required Images:

- [ ] logo.png (200x200px) - Already have ✅
- [ ] hero-bg.jpg (1920x1080px)
- [ ] equipment-1.jpg (600x400px)
- [ ] equipment-2.jpg (600x400px)
- [ ] equipment-3.jpg (600x400px)
- [ ] equipment-4.jpg (600x400px)
- [ ] equipment-showcase.jpg (800x600px)
- [ ] social-preview.jpg (1200x630px)
- [ ] favicon-32x32.png (32x32px)
- [ ] favicon-16x16.png (16x16px)
- [ ] apple-touch-icon.png (180x180px)

**See IMAGE_GUIDE.md for detailed sourcing instructions**

---

## 🚀 Quick Customization Steps

1. **Replace phone numbers** (3 locations in index.html)
2. **Update email address** (2 files: index.html, main.js)
3. **Adjust calculator prices** (main.js)
4. **Add all images** (see IMAGE_GUIDE.md)
5. **Customize colors** (optional: index.html + style.css)
6. **Review and edit all text content**
7. **Update meta tags with your domain**
8. **Test everything**
9. **Deploy!**

---

## 📋 Pre-Launch Checklist

- [ ] Phone number updated (3 places)
- [ ] Email updated (2 places)
- [ ] WhatsApp link configured
- [ ] All images added and optimized
- [ ] Logo displays correctly
- [ ] Calculator prices adjusted
- [ ] All text reviewed
- [ ] Meta tags updated
- [ ] Social preview image added
- [ ] Favicons generated
- [ ] Tested on mobile
- [ ] Tested on desktop
- [ ] All links working
- [ ] Forms tested
- [ ] Domain configured
- [ ] SSL active (HTTPS)

---

**Ready to customize? Follow this guide step by step! 🎉**

For detailed instructions, see **README.md**
