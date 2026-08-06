import fs from 'fs';
import path from 'path';

const envPath = path.join(process.cwd(), '.env');
const jwtSecret = 'ayratech-secret-key-2024-' + Math.random().toString(36).substring(7);

if (!fs.existsSync(envPath)) {
  console.log('Criando .env...');
  fs.writeFileSync(envPath, `DATABASE_URL=postgres://postgres:zc5tgyxpplqek58e1unb@desenvolvimento-r2d2_ayratech-bd-new:5432/ayratech-bd-new?sslmode=disable\nJWT_SECRET=${jwtSecret}\nPORT=3001\n`);
} else {
  let content = fs.readFileSync(envPath, 'utf8');
  if (!content.includes('JWT_SECRET')) {
    console.log('Adicionando JWT_SECRET ao .env...');
    content += \nJWT_SECRET=${jwtSecret}\n`;
    fs.writeFileSync(envPath, content);
  }
}
