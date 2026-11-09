# Lilly Labord: Zwischen den Zeilen

https://lillylabord.de

redesign this complete website. Take all the content from the the sites. Since this an author website. make it vibe according to her writing. Website is in German. so make it as it as for content. ask me if you have any question.

Specially work on the design part and surprise me.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/239ce656-528f-4212-a442-55731539d03c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Deploy on Netlify

The checked-in `netlify.toml` sets the build command to `npm run build:hosted` and the
publish directory to `dist` (not `dist/client`). On Netlify, Vite selects Nitro's
Netlify preset, which also generates the server functions required by this app.
Lovable preview and publishing retain their default deployment target.

Push these changes to the branch connected to Netlify, then trigger a new deploy.
The repository settings override the old publish-directory setting in Netlify.
The reading-preference search is currently a placeholder and does not call AI.

## Deploy on cPanel (static shared hosting)

1. On your computer or CI, use Node.js 22+, install dependencies with `npm install`,
   and run `npm run build`. No Bun installation is required. cPanel itself does
   not need Node.js or an API key.
2. Upload **all contents inside `dist/`** to `public_html/lilly/`,
   not the `dist` folder itself. Include the hidden
   `.htaccess` file; enable “Show Hidden Files” in cPanel File Manager.
3. Keep the `assets/`, `covers/`, and page directories intact. Deploy at the
   `/lilly/` path. Do not upload source files or `dist/server`.
4. Open `/lilly/`, `/lilly/books`, `/lilly/buecher`, and a book-detail URL directly, then refresh
   each page. The export contains a separate HTML file for every current page
   and all 15 book details, so no application server is needed.

The design, German content, English blurbs, language selection, filters, and
purchase links are unchanged. The search box remains visible and editable;
submitting shows the existing “search unavailable” message without contacting
AI or generating recommendations. Fonts still load from Google Fonts.

`npm run build` produces the upload-only static `dist` folder and removes any
old `.output` folder after a successful export. `npm run build:cpanel` is an alias.
The cPanel build uses `/lilly/` for navigation, scripts, styles, images and the
favicon; the Lovable preview and hosted build continue to use `/`.
Use `npm run build:hosted` only for the previous Lovable/Netlify server target.
