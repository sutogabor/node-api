import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getJSONData = async (fileName) => {
  const filePath = path.join(__dirname, '../data', fileName);
  const raw = await fs.readFile(filePath, 'utf8');
  return JSON.parse(raw);
};

