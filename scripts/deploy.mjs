import { copyFile, mkdir, readdir, rm, stat } from 'node:fs/promises'

async function copyDirectory (source, destination) {
  await mkdir(destination, { recursive: true })

  for (const entry of await readdir(source)) {
    const sourcePath = new URL(entry, source)
    const destinationPath = new URL(entry, destination)

    if ((await stat(sourcePath)).isDirectory()) {
      await copyDirectory(new URL(`${entry}/`, source), new URL(`${entry}/`, destination))
    } else {
      await copyFile(sourcePath, destinationPath)
    }
  }
}

// This repository is itself the GitHub Pages publish directory. Keep the
// editable source in src/ and replace only the generated site files.
await rm(new URL('../static/js/', import.meta.url), { recursive: true, force: true })
await rm(new URL('../static/css/', import.meta.url), { recursive: true, force: true })
await copyFile(new URL('../dist/index.html', import.meta.url), new URL('../index.html', import.meta.url))
await copyDirectory(new URL('../dist/static/', import.meta.url), new URL('../static/', import.meta.url))
console.log('Published dist/ into the GitHub Pages files. Review git diff, then commit and push.')
