# Personal website

The files GitHub Pages serves are at the repository root (`index.html` and
`static/`). Edit the Vue source instead:

1. Install the project dependencies once: `npm install`
2. Start a local preview: `npm run serve`
3. Edit `src/App.vue` (copy, resume entries, links, and section markup).
4. Build the production site: `npm run build`
5. Publish the build into the GitHub Pages directory: `npm run deploy`
6. Review with `git diff`, then commit and push `master`.

`src/` was recovered from the source map of the last deployment. It is now the
source of truth; don't edit minified files in `static/js/`.

## First-time recovery

If cloning a revision that does not yet contain `src/`, run
`npm run recover-source` before starting the development server. This extracts
the original Vue component and profile image from the saved source map. It
refuses to overwrite an existing source folder; pass `-- --force` only if you
intentionally want to restore it again.
