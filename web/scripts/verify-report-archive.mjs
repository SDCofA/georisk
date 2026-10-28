import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const listing = await readFile('out/reports/index.html', 'utf8');
assert.match(listing, /Historical research reports/);
assert.match(listing, /claims and historical scores have not been independently verified/);
assert.doesNotMatch(listing, /Level 4 Clearance|aria-label="Notifications"|aria-label="Profile"|Predicted conflict/);
for (const slug of ['iran-israel-escalation-watch', 'sudan-corridor-pressure', 'syria-border-fragility-note', 'ukraine-black-sea-watch']) {
  const report = await readFile(`out/reports/${slug}/index.html`, 'utf8');
  assert.match(report, /Archived research: this report reflects its publication date/);
  assert.match(report, /are not a current forecast/);
}
console.log('Archived report labels and navigation verified.');
