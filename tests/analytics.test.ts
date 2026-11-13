import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { GA_MEASUREMENT_ID, CONSENT_STORAGE_KEY, googleAnalyticsBootstrap } from '../lib/analytics';

describe('google analytics consent', () => {
  it('defaults consent mode v2 to denied before the measurement config', () => {
    const script = googleAnalyticsBootstrap();
    const defaults = script.slice(
      script.indexOf("gtag('consent', 'default'"),
      script.indexOf('function deleteGaCookies'),
    );
    for (const key of ['ad_storage', 'ad_user_data', 'ad_personalization', 'analytics_storage']) {
      assert.match(defaults, new RegExp(`${key}: 'denied'`));
    }
    assert.doesNotMatch(defaults, /granted/);
    assert.match(script, new RegExp(`gtag\\('config', ${JSON.stringify(GA_MEASUREMENT_ID).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`));
    assert.ok(script.indexOf("gtag('consent', 'default'") < script.indexOf("gtag('config'"));
    assert.match(script, new RegExp(CONSENT_STORAGE_KEY));
    assert.match(script, /window\.auswandernSetConsent/);
    assert.match(script, /name\.indexOf\('_ga'\)/);
  });
});
