# For the Boy You Were — Website Setup

## Files
- `index.html` — page content and photo placeholders
- `style.css` — vintage scrapbook design and responsive layout
- `script.js` — music control, family-photo reveal, Grandpa choice, and love-letter interaction
- `assets/` — put your photographs and music here

## Add his photographs
Replace the placeholder files in `assets/` with his photos. Keep the exact filenames below so the website can find them. Use JPG or JPEG photos and keep filenames lowercase.

### Childhood album
- `childhood-1.jpg`
- `childhood-2.jpg`
- `childhood-3.jpg`

### Family section
- `family-center.jpg`
- `family-1.jpg`
- `family-2.jpg`
- `family-3.jpg`
- `family-4.jpg`

### Favorite things
- `vlogs.jpg`
- `guitar.jpg`
- `bike.jpg`

### Grandpa chapter
- `grandpa-1.jpg`
- `grandpa-2.jpg`
- `grandpa-3.jpg`

### Present-day chapter
- `present-1.jpg`
- `present-2.jpg`

You can use the same photo in more than one place if needed. If you don't have a photo for a slot yet, a placeholder image will be used in the ZIP so the layout remains visible; replace it when ready.

## Add background music
Place a gentle piano or nostalgic instrumental audio file in `assets/` and name it `soft-piano.mp3`. The site intentionally does not autoplay music; your boyfriend can press **Play our soundtrack** because browsers commonly block autoplay. Use music you own or have permission to use.

## Run the site
1. Extract the ZIP folder.
2. Open the `boyfriend-memory-website` folder.
3. Add photos and `soft-piano.mp3` to `assets/`.
4. Double-click `index.html` to open it in your browser.

For the best result, use a local development server such as VS Code's Live Server extension while editing. The Google Fonts links need an internet connection; the page still has fallback fonts if offline.

## Customize the love letter
Open `index.html` and search for `To my love,`. Edit the paragraphs in the `love-letter` section so it sounds like you. You can also change the heading, captions, and grandpa message directly in the HTML.

## Share it with him
To let him open it on his phone from anywhere, publish the folder with a static hosting service such as GitHub Pages or Netlify. Upload the whole project, including the `assets` folder. Do not upload private photos publicly unless you're comfortable with anyone who has the link being able to access them; use private sharing or a password-protected option if you need privacy.
