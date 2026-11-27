SUCCESS DIGITAL STUDIO — WEBSITE FIX PATCH

This patch fixes the portfolio image filename mismatches and updates the social preview image URL.

UPLOAD / REPLACE THESE FILES IN YOUR EXISTING GITHUB REPOSITORY:
- index.html (replace existing)
- js/main.js (replace existing)
- social-preview-v2.png (add at repository/site root)
- your-image3.png (add at repository/site root)

IMPORTANT: KEEP your existing your-image1.png and your-image2.jpg files.
The live site already serves those two filenames. Do not delete them.

Portfolio image paths after this fix:
- The Celebration Edit: your-image1.png
- Studio North: your-image2.jpg
- The Good Notes: your-image3.png

The social preview metadata now points to social-preview-v2.png to avoid a stale cached image URL. After committing and waiting for Netlify to finish deploying, share the homepage link again. Some apps may still cache previews for a while.

Upload the files into the same published site root where index.html is located. Keep the css and js folders in their existing locations.
