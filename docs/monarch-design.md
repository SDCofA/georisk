# Monarch Castle design 2026.10

This product adopts the shared collection navigation, locally hosted IBM Plex fonts, navy/graphite surfaces, tabular numbers and visible keyboard focus. The responsive Collection menu links to Data, Maps, Signals, Research, Methodology and the free public Keep workspace. Analytical colours keep their existing meaning.

Source: [main design system](https://github.com/MonarchCastleTech/MonarchCastleTech.github.io/tree/main/src/design-system). Vendored assets include a version manifest and SIL OFL font licence. Update them with the main repository's scripts/sync-product-design.mjs, passing the directory containing product clones; the command preserves the application's existing layout and writes the collection shell idempotently.

The data, source links, calculation methods, model outputs and access controls retain their existing boundaries. Full-screen products reserve the shared header's height; PrepTürk also caches the new assets offline. Each product continues to own its own application technology and release workflow.

Validation on 2026-10-02: web: npm run build passed, including GITHUB_PAGES=true PAGES_BASE_PATH=/sdcofa/georisk export. npm run test:runtime: 20 passed, 3 failed because the clean clone lacks the external canonical forecast snapshot (tests expect 30 records / AUS). The data loader and those tests are unchanged; no forecast was fabricated.

Canonical product: https://monarchcastle.com/sdcofa/georisk/
