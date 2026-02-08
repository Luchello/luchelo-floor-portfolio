import fs from 'fs';
import path from 'path';

export default function copyWebpOnly() {
  return {
    name: 'copy-webp-only',
    closeBundle() {
      const publicPhotos = path.resolve('public/photos');
      const distPhotos = path.resolve('dist/photos');

      // Create dist/photos if it doesn't exist
      if (!fs.existsSync(distPhotos)) {
        fs.mkdirSync(distPhotos, { recursive: true });
      }

      // Copy only WebP files
      function copyWebpFiles(src, dest) {
        const entries = fs.readdirSync(src, { withFileTypes: true });
        
        for (const entry of entries) {
          const srcPath = path.join(src, entry.name);
          const destPath = path.join(dest, entry.name);
          
          if (entry.isDirectory()) {
            if (!fs.existsSync(destPath)) {
              fs.mkdirSync(destPath, { recursive: true });
            }
            copyWebpFiles(srcPath, destPath);
          } else if (entry.name.endsWith('.webp')) {
            fs.copyFileSync(srcPath, destPath);
            console.log(`✓ Copied: ${entry.name}`);
          }
        }
      }

      console.log('\n📦 Copying WebP images only...');
      
      // Remove all JPG files from dist
      function removeJpgFiles(dir) {
        if (!fs.existsSync(dir)) return;
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          
          if (entry.isDirectory()) {
            removeJpgFiles(fullPath);
          } else if (entry.name.match(/\.(jpg|jpeg)$/i)) {
            fs.unlinkSync(fullPath);
            console.log(`✗ Removed: ${entry.name}`);
          }
        }
      }

      removeJpgFiles(distPhotos);
      console.log('✅ WebP-only build complete!\n');
    }
  };
}
