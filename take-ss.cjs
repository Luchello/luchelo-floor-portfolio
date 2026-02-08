const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('/home/ubuntu/.openclaw/workspace/agency/projects/nail-salon/node_modules/puppeteer');

const distDir = path.join(__dirname, 'dist');
const mimeTypes = {
  '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
  '.webp': 'image/webp', '.woff2': 'font/woff2', '.woff': 'font/woff',
};

const server = http.createServer((req, res) => {
  let url = req.url.split('?')[0];
  let filePath = path.join(distDir, url === '/' ? 'index.html' : url);
  if (!fs.existsSync(filePath)) filePath = path.join(distDir, 'index.html');
  const ext = path.extname(filePath);
  res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(3490, '127.0.0.1', async () => {
  console.log('Server on 3490');
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://127.0.0.1:3490', { waitUntil: 'networkidle0', timeout: 60000 });
  await page.evaluate(async () => {
    const imgs = document.querySelectorAll('img');
    await Promise.all([...imgs].map(img => {
      if (img.complete) return;
      return new Promise(r => { img.onload = r; img.onerror = r; setTimeout(r, 8000); });
    }));
    document.querySelectorAll('.animate-on-scroll, [class*="animate"]').forEach(el => {
      el.classList.add('is-visible'); el.style.opacity = '1'; el.style.transform = 'none';
    });
  });
  await new Promise(r => setTimeout(r, 3000));
  await page.screenshot({ path: 'screenshot-desktop.png', fullPage: true });
  console.log('Desktop OK!');
  
  await page.setViewport({ width: 375, height: 812 });
  await new Promise(r => setTimeout(r, 3000));
  await page.screenshot({ path: 'screenshot-mobile.png', fullPage: true });
  console.log('Mobile OK!');
  
  await browser.close();
  server.close();
});
