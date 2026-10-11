import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const script = fileURLToPath(new URL('../scripts/resolve-release-version.mjs', import.meta.url));
const resolve = inputs => spawnSync(process.execPath, [script], {
  encoding: 'utf8',
  env: { ...process.env, EVENT_NAME: 'workflow_dispatch', INPUT_VERSION: '', INPUT_STATUS: '', TAG_NAME: '', ...inputs },
});
test('manual and tagged releases agree on version, status, and prerelease identity', () => {
  for (const status of ['draft', '-draft']) {
    const manual = resolve({ INPUT_VERSION: '0.2.0', INPUT_STATUS: status });
    const tagged = resolve({ EVENT_NAME: 'push', TAG_NAME: 'v0.2.0-draft' });
    assert.equal(manual.status, 0, manual.stderr);
    assert.equal(manual.stdout, tagged.stdout);
    assert.match(manual.stdout, /tag=v0\.2\.0-draft\nprerelease=true/);
  }
  for (const status of ['', 'final', '-final']) {
    const result = resolve({ INPUT_VERSION: '0.2.0', INPUT_STATUS: status });
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /version=0\.2\.0\ntag=v0\.2\.0\nprerelease=false/);
  }
  for (const inputs of [{ INPUT_VERSION: '0.2' }, { EVENT_NAME: 'push', TAG_NAME: 'v0.2.0.1' }, { INPUT_STATUS: '../draft' }]) {
    assert.notEqual(resolve(inputs).status, 0);
  }
});
