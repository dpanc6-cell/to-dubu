# To Dubu: Our Little Story

A personalized interactive anniversary storybook for Drumil and Dhruvi.

## 1. Open it on your computer

The easiest method:

1. Extract the ZIP file.
2. Open the `digital-scrapbook` folder.
3. Double-click `index.html`.

For the most reliable preview, install Visual Studio Code and the **Live Server** extension. Open this folder in VS Code, right-click `index.html`, and select **Open with Live Server**.

## 2. Add the airport photo

1. Choose the photo from August 8, 2024.
2. Rename it exactly to `airport-photo.jpg`.
3. Put it inside `assets/photos/`.
4. Replace the existing file if one is present.

The website automatically uses the placeholder until this photo is added.

## 3. Add your song

1. Choose an MP3 file you are allowed to use.
2. Rename it exactly to `our-song.mp3`.
3. Put it inside `assets/audio/`.

Browsers do not allow music to start automatically, so Dubu must tap the music button once.

## 4. Edit the words

Open `index.html` in VS Code. Nearly all personal text is written directly inside the chapter sections. Use Ctrl+F to search for a sentence, then replace it.

Do not change text inside angle brackets such as `<section>` or `<p>`. Only change the words between them.

## 5. Deploy with GitHub Pages

1. Create a free account at GitHub.
2. Click **New repository**.
3. Name it something such as `to-dubu`.
4. Make it **Public** and create the repository.
5. Click **uploading an existing file**.
6. Drag every item from inside the `digital-scrapbook` folder into GitHub. Upload the contents, not the outer folder itself.
7. Click **Commit changes**.
8. Open the repository's **Settings**.
9. Select **Pages** from the left side.
10. Under **Build and deployment**, choose **Deploy from a branch**.
11. Select `main`, choose `/root`, and click **Save**.
12. GitHub will show the website address after publishing.

## 6. Deploy with Netlify Drop, the easiest method

1. Go to Netlify Drop in your browser.
2. Drag the entire extracted `digital-scrapbook` folder onto the page.
3. Netlify publishes it and provides a shareable link.
4. Create a free Netlify account if you want to keep the link and rename the site.

## Important privacy note

Anyone with the public link can access the photos and words. Do not include anything highly private. GitHub Pages repositories are public on free accounts when deployed this way.

## Files

- `index.html`: all chapters and text
- `style.css`: visual design and animation
- `script.js`: interaction behavior
- `assets/photos/`: your photos
- `assets/audio/`: your MP3 song
