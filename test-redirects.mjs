// Test all redirects under `/static/_redirects` are reachable

if (process.env.BUILD_TARGET === 'tutorial') {
  console.log('Skipping test-redirects because BUILD_TARGET is tutorial');
  process.exit(0);
}

import fs from 'node:fs/promises';

const content = await fs.readFile('./static/_redirects', 'utf8');
const baseUrl = 'http://localhost:3000';
const entries = new Map();

for (const line of content.split('\n')) {
  const trimmed = line.trim();
  if (trimmed === '' || trimmed.startsWith('#')) {
    continue;
  }

  const [from, to] = line.split(' ');

  if (to.includes(':')) {
    console.warn(`Ignoring ${to} because it has a placeholder`);
    continue;
  }

  entries.set(from, to);
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

console.log('=== All redirects are reachable ===');

for (const [from, to] of entries) {
  if (from === '/' || from.endsWith('*')) {
    console.log(`Skipping ${from} because it's a catch-all redirect`);
    continue;
  }

  const mappedFrom = from.endsWith('/') ? from.slice(0, -1) : from + '/';
  const mappedTo = entries.get(mappedFrom);

  if (!mappedTo) {
    throw new Error(`Missing mapped redirect for ${from}. Expected ${mappedFrom}.`);
  }

  if (mappedTo !== to) {
    throw new Error(`Mismatched redirect for ${from}. Expected ${to} but got ${mappedTo}.`);
  }
}

console.log('=== All redirects are mapped correctly ===');
