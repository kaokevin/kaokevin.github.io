import { access, mkdir, readFile, writeFile } from 'node:fs/promises'

const mapPath = new URL('../static/js/app.6c678f2cb84453d92376.js.map', import.meta.url)
const appPath = new URL('../src/App.vue', import.meta.url)
const mainPath = new URL('../src/main.js', import.meta.url)
const assetPath = new URL('../src/assets/profile.jpg', import.meta.url)
const map = JSON.parse(await readFile(mapPath, 'utf8'))

try {
  await access(appPath)
  if (!process.argv.includes('--force')) {
    throw new Error('src/App.vue already exists. Refusing to overwrite it; use --force only to replace it from the legacy source map.')
  }
} catch (error) {
  if (error.code !== 'ENOENT') throw error
}

const sourceFor = (path) => map.sourcesContent[map.sources.indexOf(path)]
let app = sourceFor('webpack:///src/App.vue')

// The source map predates the last hand-edited deployment. Bring the recovered
// component forward to the content that is live on the site today.
app = app
  .replace("Staff SWE @LinkedIn", "Senior Staff SWE @LinkedIn")
  .replace(
    "Apart from being a software engineer, I enjoy spending time outdoors and staying active, whether it be hiking the nearby trails or jumping into volleyball open gym. I\\'m an avid photographer, a huge dog lover, and a coffee enthusiast. You can catch me volunteering at our local animal shelter (Humane Society Silicon Valley) on the weekends!",
    "Apart from being a software engineer, I enjoy spending time outdoors and staying active, whether it be hiking the nearby trails or bouldering at the local gym. I\\'m an avid photographer, a huge dog lover, and a coffee enthusiast."
  )
  .replace("position: 'Staff Software Engineer'", "position: 'Senior Staff Software Engineer'")
  .replace(
    "Tech lead of the Data track in the Careers Foundations team. I was previously a Senior SWE and SWE at LinkedIn working on the Careers Search Experience team. I started full-time here in July 2016. Tackling relevance infrastructure and applied machine learning problems on the Careers team. Multiple patents filed.",
    "Technical lead within the Careers Foundations org at LinkedIn. I focus on ML and search infrastructure for LinkedIn Jobs, supporting our recommendations and search use cases. Multiple patents filed."
  )
  .replace("startDate: 'June 2018'", "startDate: 'June 2016'")

await mkdir(new URL('../src/assets/', import.meta.url), { recursive: true })
await writeFile(appPath, app)
await writeFile(mainPath, sourceFor('webpack:///./src/main.js'))
await writeFile(assetPath, await readFile(new URL('../static/img/profile.d20b9c6.jpg', import.meta.url)))
console.log('Recovered src/App.vue, src/main.js, and src/assets/profile.jpg.')
