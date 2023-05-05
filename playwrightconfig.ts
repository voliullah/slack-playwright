import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    browserName: 'chromium',
  },
  testMatch: '**/tests/project1.test.ts'

};

export default config;
