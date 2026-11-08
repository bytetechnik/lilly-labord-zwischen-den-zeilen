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

The checked-in `netlify.toml` sets the build command to `bun run build` and the
publish directory to `dist` (not `dist/client`). On Netlify, Vite selects Nitro's
Netlify preset, which also generates the server functions required by this app.
Lovable preview and publishing retain their default deployment target.

Push these changes to the branch connected to Netlify, then trigger a new deploy.
The repository settings override the old publish-directory setting in Netlify.
For book recommendations, configure `LOVABLE_API_KEY` securely in Netlify's
environment variables; never put its value in the repository.
