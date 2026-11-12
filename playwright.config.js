// @ts-check
import { defineConfig, devices, expect } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 40 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  retries: 2,
  workers: 4,
  reporter: 'html',
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: false,
        screenshot: 'on',
        video: 'on',
        trace: 'on-first-retry',
      },
  // },
  // {
  //     name: 'firefox',
  //     use: {
  //         ...devices['Desktop Firefox'],
  //         headless: false
  //     }
  // },
  // {
  //     name: 'webkit',
  //     use: {
  //         ...devices['Desktop Safari'],
  //         headless: false
  //     }
  // }]

},
],
});
module.exports = config
