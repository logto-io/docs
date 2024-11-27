// Test all redirects under `/static/_redirects` are reachable

import fs from 'node:fs/promises';

const content = await fs.readFile('./static/_redirects', 'utf8');

const baseUrl = 'http://localhost:3000';

for (const line of content.split('\n')) {
  const trimmed = line.trim();
  if (trimmed === '' || trimmed.startsWith('#')) {
    continue;
  }

  const [, to] = line.split(' ');

  if (to.includes(':')) {
    console.warn(`Ignoring ${to} because it has a placeholder`);
    continue;
  }

  // eslint-disable-next-line no-await-in-loop
  const response = await fetch(new URL(to, baseUrl));

  if (response.status === 200) {
    console.log(`Target ${to} is reachable`);
  } else {
    console.error(`Failed to reach ${to}`);
    console.error(`Status: ${response.status}`);
    throw new Error(`Failed to reach ${to}`);
  }
}
