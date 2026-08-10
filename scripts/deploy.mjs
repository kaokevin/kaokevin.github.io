import { cp, rm } from 'node:fs/promises'

// This repository is itself the GitHub Pages publish directory. Keep the
// editable source in src/ and replace only the generated site files.
await rm(new URL('../static/js/', import.meta.url), { recursive: true, force: true })
await rm(new URL('../static/css/', import.meta.url), { recursive: true, force: true })
await cp(new URL('../dist/index.html', import.meta.url), new URL('../index.html', import.meta.url))
await cp(new URL('../dist/static/', import.meta.url), new URL('../static/', import.meta.url), { recursive: true })
console.log('Published dist/ into the GitHub Pages files. Review git diff, then commit and push.')
