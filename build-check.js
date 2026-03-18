const { execSync } = require('child_process');
const fs = require('fs');
try {
  const out = execSync('npm run build', { encoding: 'utf-8', stdio: 'pipe' });
  fs.writeFileSync('build-log.txt', out, 'utf-8');
} catch (e) {
  fs.writeFileSync('build-log.txt', e.stdout || e.stderr || e.message, 'utf-8');
}
