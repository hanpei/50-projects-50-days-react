const puppeteer = require('puppeteer')
const path = require('path')
const fs = require('fs')

async function screenshot(url, path) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto(url)
  await page.screenshot({
    path,
  })

  await browser.close()
}

function getProjectsName() {
  const src = path.join(__dirname, '../pages/projects/')

  const projects = []
  const files = fs.readdirSync(src)
  files.forEach((item, index) => {
    let stat = fs.lstatSync(src + item)
    if (stat.isDirectory() === true) {
      projects.push(item)
    }
  })
  console.log(projects)
  return projects
}

function genProjectScreenshots() {
  const projects = getProjectsName()
  const file = path.join(__dirname, `../public/img/`)
  console.log(file)
  projects.forEach((item) => {
    screenshot(`http://localhost:3000/projects/${item}`, `${file}${item}.jpg`)
  })
}

genProjectScreenshots()
