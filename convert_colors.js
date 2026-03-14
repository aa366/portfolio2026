const { convert } = require('culori');

const fs = require('fs');

// Read the colors.ts file
const content = fs.readFileSync('./src/constants/colors.ts', 'utf8');

// Parse the JSON-like structure
// Since it's TypeScript with export, I need to extract the array

// Find the SHADCN_PRESETS array
const match = content.match(/export const SHADCN_PRESETS: ColorPreset\[\] = (\[[\s\S]*?\]);/);

if (!match) {
  console.error('Could not find SHADCN_PRESETS');
  process.exit(1);
}

let presetsStr = match[1];

// Replace all HSL strings with OKLCH
presetsStr = presetsStr.replace(/"(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)%\s+(\d+(?:\.\d+)?)%"/g, (match, h, s, l) => {
  const hsl = { mode: 'hsl', h: parseFloat(h), s: parseFloat(s)/100, l: parseFloat(l)/100 };
  const oklch = convert(hsl, 'oklch');
  return `"${oklch.l.toFixed(3)} ${oklch.c.toFixed(3)} ${oklch.h.toFixed(3)}"`;
});

// Replace the content
const newContent = content.replace(/export const SHADCN_PRESETS: ColorPreset\[\] = (\[[\s\S]*?\]);/, `export const SHADCN_PRESETS: ColorPreset[] = ${presetsStr};`);

fs.writeFileSync('./src/constants/colors.ts', newContent);

console.log('Converted all colors to OKLCH');