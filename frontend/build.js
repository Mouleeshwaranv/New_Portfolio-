const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('=== Starting Portfolio Build ===');
console.log('Current working directory:', process.cwd());

if (fs.existsSync(path.join(process.cwd(), 'frontend', 'package.json'))) {
    console.log('Detected root directory with frontend/ subfolder.');
    console.log('Installing frontend dependencies...');
    execSync('npm --prefix frontend install', { stdio: 'inherit' });
    console.log('Building frontend with Vite...');
    execSync('npm --prefix frontend run build', { stdio: 'inherit' });
    
    // Ensure dist exists at root as well
    const srcDist = path.join(process.cwd(), 'frontend', 'dist');
    const destDist = path.join(process.cwd(), 'dist');
    if (fs.existsSync(srcDist)) {
        console.log('Copying frontend/dist to root dist...');
        fs.cpSync(srcDist, destDist, { recursive: true });
    }
} else {
    console.log('Detected frontend directory (or flat structure).');
    console.log('Running vite build...');
    execSync('npm run build', { stdio: 'inherit' });
}

console.log('=== Build Completed Successfully! ===');
