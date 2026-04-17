import fs from 'fs';
import https from 'https';
import path from 'path';

const dir = path.join(process.cwd(), 'public', 'images', 'hero-sequence');

// Ensure directory exists
fs.mkdirSync(dir, { recursive: true });

const filePath = path.join(dir, 'ezgif-frame-001.png');
const file = fs.createWriteStream(filePath);
const url = "https://images.dualite.app/271b5e34-d324-4dac-969a-afc883557276/ezgif-frame-001-43f3f008-993f-4f96-85bf-0187b213750a.webp";

console.log('Starting download...');

https.get(url, (response) => {
  if (response.statusCode !== 200) {
    console.error(`Failed to get response: ${response.statusCode}`);
    return;
  }
  
  response.pipe(file);
  
  file.on('finish', () => {
    file.close();
    console.log(`Successfully downloaded frame to: ${filePath}`);
    
    // Verify file exists and has size
    const stats = fs.statSync(filePath);
    console.log(`File size: ${stats.size} bytes`);
  });
}).on('error', (err) => {
  fs.unlink(filePath, () => {});
  console.error('Error downloading file:', err.message);
});
