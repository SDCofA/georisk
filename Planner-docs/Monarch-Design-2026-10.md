# Public design adoption

Approved scope: apply the collection identity to the existing public frontend. Preserve data and functional boundaries. Changed entrypoints, vendored CSS/fonts and source documentation are listed in the Git diff.

Success criteria: one collection header, six working navigation links, readable navy palette, usable desktop/mobile menu, original analytical controls retained.

Validation: web: npm run build passed, including GITHUB_PAGES=true PAGES_BASE_PATH=/sdcofa/georisk export. npm run test:runtime: 20 passed, 3 failed because the clean clone lacks the external canonical forecast snapshot (tests expect 30 records / AUS). The data loader and those tests are unchanged; no forecast was fabricated.

Risk: product-specific fixed panels and offline caches need to account for the shared header. Adaptations are contained in the shared CSS and the existing PrepTürk cache.
