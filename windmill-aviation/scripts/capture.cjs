const { chromium } = require('playwright')
const fs = require('fs')

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  await page.goto('https://windmill-aero-hub.lovable.app', { waitUntil: 'networkidle' })
  const html = await page.content()
  fs.writeFileSync('../temp/rendered.html', html)
  await page.screenshot({ path: '../temp/rendered.png', fullPage: true })
  await browser.close()
  console.log('Rendered DOM and screenshot saved to ../temp')
})()




